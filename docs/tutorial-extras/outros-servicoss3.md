---
sidebar_position: 6
---

## S3 vs Outros Serviços de Armazenamento  

Na AWS, existem diferentes serviços de armazenamento, cada um com um propósito específico:  

- **Amazon S3** → Armazenamento de objetos escalável e durável.  
- **Amazon EBS (Elastic Block Store)** → Armazenamento em blocos para instâncias EC2.  
- **Amazon EFS (Elastic File System)** → Sistema de arquivos distribuído para múltiplas instâncias.  
- **AWS Glacier** → Armazenamento de arquivamento de longo prazo.  

Na prova, podem perguntar **quando escolher S3 ao invés de EBS ou EFS**. Resumindo:  
👉 Use **S3** para armazenamento escalável de objetos.  
👉 Use **EBS** para armazenamento de blocos vinculado a uma instância EC2.  
👉 Use **EFS** para compartilhamento de arquivos entre várias instâncias.  
