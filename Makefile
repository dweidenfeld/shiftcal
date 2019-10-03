.PHONY: help

COMPOSE=docker-compose -f docker-compose.yml

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# ------------------------------------------------------
# GLOBAL
# ------------------------------------------------------
clean: ## Clean the docker env
	$(COMPOSE) down

build: ## Build the docker env (useful if dependencies have changed)
	$(COMPOSE) build

start: ## Start the docker env
	$(COMPOSE) up -d

console: ## Connect to the docker env
	$(COMPOSE) exec app sh

stop: ## Stop the docker env
	$(COMPOSE) stop

major-version:
	@echo -n "1"

all: clean build start console stop ## Clean, Build, Start, Console, Stop
