🚀 Projeto CI/CD Completo com GitHub Actions + Docker + AWS ECS

Sistema de automação de deploy utilizando práticas modernas de DevOps com:

⚡ GitHub Actions
🐳 Docker
☁️ AWS ECS
🔐 Secrets & Environment Variables
📦 Continuous Integration (CI)
🚀 Continuous Delivery (CD)
🛡️ Deploy sem downtime
🔄 Pipeline automatizada
📌 Objetivo do Projeto

Este projeto foi criado para demonstrar um fluxo profissional de CI/CD utilizando containers Docker e deploy automatizado na AWS.

A pipeline realiza:

Build da aplicação
Execução de testes automatizados
Validação do código
Criação da imagem Docker
Push para registry
Deploy automático no ECS
Atualização segura da aplicação sem downtime
🏗️ Arquitetura
Developer Push
       ↓
GitHub Actions
       ↓
Build + Test
       ↓
Docker Build
       ↓
Push Image
       ↓
AWS ECS Deploy
       ↓
Running Container
⚙️ Tecnologias Utilizadas
DevOps
Docker
GitHub Actions
AWS ECS
AWS ECR
YAML Pipelines
Backend
Node.js / Python / (adicione sua stack)
REST API
Versionamento
Git
GitHub Flow
📂 Estrutura do Projeto
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
🔄 Pipeline CI/CD
Continuous Integration

A cada push ou pull request:

Instala dependências
Executa lint
Roda testes
Valida build
Continuous Delivery

Após aprovação na branch principal:

Cria imagem Docker
Publica no AWS ECR
Atualiza serviço ECS
Realiza deploy automatizado
🐳 Docker
Build da imagem
docker build -t app-ci-cd .
Rodar container
docker run -p 3000:3000 app-ci-cd
☁️ Deploy AWS ECS

O deploy utiliza:

Amazon ECS
Amazon ECR
GitHub Secrets
IAM Roles

Secrets configurados no GitHub:

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
ECR_REPOSITORY
ECS_SERVICE
ECS_CLUSTER
🔐 Segurança

Boas práticas implementadas:

Secrets protegidos
Variáveis sensíveis via GitHub Secrets
Pipeline automatizada
Deploy controlado
Separação de ambientes
🚀 Como Executar Localmente
Clonar projeto
git clone https://github.com/higorvitorpadilha/Projeto-CI-CD.git
Entrar na pasta
cd Projeto-CI-CD
Rodar aplicação
docker-compose up --build
📸 Workflow em Execução

Adicione prints aqui:

GitHub Actions rodando
ECS funcionando
Deploy realizado
Logs da pipeline
📈 Melhorias Futuras
 Terraform
 Kubernetes
 SonarQube
 Testes E2E
 Blue/Green Deployment
 Monitoramento com CloudWatch
 Observabilidade com Grafana
🧠 Conceitos Aplicados
CI/CD
DevOps
Containers
Cloud Computing
Infraestrutura Automatizada
Deploy sem downtime
Pipelines modernas
👨‍💻 Autor

Desenvolvido por Higor Padilha.

Conecte-se comigo no LinkedIn para trocar ideias sobre desenvolvimento, cloud e DevOps.
