#!/usr/bin/env python3
"""
Exporta dados de T3010DW_Issues_Tracker.xlsx para data.json
Use: python excel_to_json.py [arquivo.xlsx]
"""

import pandas as pd
import json
import sys
from datetime import datetime

def export_excel_to_json(excel_file='T3010DW_Issues_Tracker.xlsx'):
    """Lê Excel e gera JSON para dashboard web"""
    
    try:
        # Ler a aba ISSUES
        df = pd.read_excel(excel_file, sheet_name='ISSUES')
        print(f"✓ Lendo {excel_file}...")
        
        issues = []
        for idx, row in df.iterrows():
            # Formatar datas
            data_aberta = ''
            if pd.notna(row['Data Aberta']):
                try:
                    data_aberta = pd.to_datetime(row['Data Aberta']).strftime('%Y-%m-%d')
                except:
                    data_aberta = str(row['Data Aberta'])
            
            data_fechamento = ''
            if pd.notna(row['Data Fechamento']):
                try:
                    data_fechamento = pd.to_datetime(row['Data Fechamento']).strftime('%Y-%m-%d')
                except:
                    data_fechamento = str(row['Data Fechamento'])
            
            issue = {
                'id': int(row['ID']) if pd.notna(row['ID']) else None,
                'prioridade': str(row['Prioridade']).strip() if pd.notna(row['Prioridade']) else '',
                'tipo': str(row['Tipo']).strip() if pd.notna(row['Tipo']) else '',
                'categoria': str(row['Categoria']).strip() if pd.notna(row['Categoria']) else '',
                'sumario': str(row['Sumário']).strip() if pd.notna(row['Sumário']) else '',
                'status': str(row['Status']).strip() if pd.notna(row['Status']) else '',
                'dataAberta': data_aberta,
                'responsavel': str(row['Responsável']).strip() if pd.notna(row['Responsável']) else '',
                'versaoReportada': str(row['Versão Reportada']).strip() if pd.notna(row['Versão Reportada']) else '',
                'versaoFix': str(row['Versão Fix']).strip() if pd.notna(row['Versão Fix']) else '',
                'raiz': str(row['Raiz']).strip() if pd.notna(row['Raiz']) else '',
                'testeValidacao': str(row['Teste Validação']).strip() if pd.notna(row['Teste Validação']) else '',
                'comentarioMarlus': str(row['Comentário Marlus']).strip() if pd.notna(row['Comentário Marlus']) else '',
                'comentarioODM': str(row['Comentário ODM']).strip() if pd.notna(row['Comentário ODM']) else '',
                'comentarioZtech': str(row['Comentário Ztech']).strip() if pd.notna(row['Comentário Ztech']) else '',
                'dataFechamento': data_fechamento,
                'okNok': str(row['OK/NOK Final']).strip() if pd.notna(row['OK/NOK Final']) else ''
            }
            issues.append(issue)
        
        # Criar estrutura final
        data = {
            'updated': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'total': len(issues),
            'issues': issues
        }
        
        # Salvar JSON
        output_file = 'data.json'
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"✅ {output_file} criado com {len(issues)} issues")
        print(f"📅 Atualizado: {data['updated']}")
        
    except FileNotFoundError:
        print(f"❌ Arquivo {excel_file} não encontrado")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Erro: {e}")
        sys.exit(1)

if __name__ == '__main__':
    excel_file = sys.argv[1] if len(sys.argv) > 1 else 'T3010DW_Issues_Tracker.xlsx'
    export_excel_to_json(excel_file)
