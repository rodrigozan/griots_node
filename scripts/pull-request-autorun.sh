#!/bin/bash

# Define o diretório do repositório a ser monitorado
REPO_DIR="/app/www/"

# Função para executar um pull request
execute_pull_request() {
  echo "Entrou na função"
  cd $REPO_DIR

  # Tenta realizar o pull
  git pull origin master
  echo "Git pull realizado"

  # Verifica se houve conflitos
  if [ $? -ne 0 ]; then
    echo "Conflitos de merge detectados. Abortando o merge..."
    git merge --abort

    # Resolva os conflitos aceitando a versão local
    git checkout --theirs .  # Aceita a versão local (ours) em conflitos
    git add .                # Adiciona as mudanças resolvidas
    git commit -m "Resolvidos conflitos de merge"  # Realiza o commit

    # Tente novamente o pull
    git pull origin master
  fi
  echo "Script executed successfully"
}

# Monitora o diretório em busca de mudanças
inotifywait -m -r -e create,modify,delete $REPO_DIR | while read path action file; do
  # Verifica se a ação é um arquivo de pull request pendente
  echo "Verificando se a ação é um arquivo de pull request pendente"
  if [[ $file == "PULL_REQUEST_PENDING" ]]; then
    # Executa o pull request
    execute_pull_request
  fi
  echo "Script executed successfully"
done
