FROM node:20-bullseye

# Instalando dependências básicas + navegadores
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    unzip \
    gnupg \
    ca-certificates \
    software-properties-common \
    chromium \
    firefox-esr \
    x11vnc \
    xvfb \
    fluxbox \
    --no-install-recommends && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Configuração do ambiente de trabalho
WORKDIR /workspace

# Expor portas comuns (React/Angular/Vue + VNC opcional)
EXPOSE 3000 4200 5173

CMD [ "bash" ]