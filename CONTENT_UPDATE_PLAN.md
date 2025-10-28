# OBZR Documentation Content Update Plan

## What OBZR Actually Is

OBZR is a **production-grade AI agent system with advanced persistent memory capabilities**. It's a server application with a REST API, not an installable SDK.

### Core Components
- **Server**: Node.js/Express API server
- **Databases**: PostgreSQL (primary), Redis (STM/cache), ChromaDB (vectors)
- **AI Integration**: OpenAI GPT and Anthropic Claude
- **Memory System**: Dual-layer STM/LTM with intelligent promotion

### What It's NOT
- ❌ Not an npm package you install
- ❌ Not called "AgentOS" (that was placeholder content)
- ❌ Not a generic agent framework
- ❌ Not a client-side library

## Pages That Need Major Updates

### 1. Installation Page
**Current**: Shows npm install commands for a fictional SDK
**Should Be**: 
- Prerequisites (Node.js, PostgreSQL, Redis, ChromaDB)
- Clone repository
- Environment setup (.env configuration)
- Database setup (Prisma)
- Starting the server

### 2. Quickstart Page  
**Current**: Generic agent creation examples
**Should Be**:
- Server setup steps
- User registration/authentication
- First memory storage via API
- First memory query via API
- Chat with memory integration

### 3. Core Concepts Page
**Current**: Generic agent concepts
**Should Be**:
- Memory System (STM/LTM architecture)
- Importance Scoring (6-factor algorithm)
- Memory Types (episodic, semantic, procedural)
- Hybrid Search (semantic + keyword)
- Memory Promotion & Consolidation

### 4. SDK Section (needs complete rewrite)
**Current Pages**:
- Creating Agents
- Memory System
- STM & LTM
- Task Capabilities
- Persistence Layer
- API Integration

**Should Be**:
- Memory Operations (store, query, batch)
- Importance Scoring
- Hybrid Search & Retrieval
- Memory Promotion
- Memory Consolidation
- AI Chat Integration

### 5. API Reference Section
**Current**: Generic API methods
**Should Be**:
- Authentication (JWT)
- Memory Endpoints
- AI Chat Endpoints
- Session Management
- Health & Monitoring

### 6. Examples Section
**Current**: Generic use cases
**Should Be**:
- Learning Assistant (actual example from server docs)
- Customer Support Bot
- Personal AI Companion
- Knowledge Management System

## Content to Remove

- All references to "AgentOS SDK"
- npm install commands for @agentos/sdk
- Generic agent orchestration content
- Workflow graphs (not part of OBZR)
- Cognitive routing (not part of OBZR)
- Knowledge graphs (ChromaDB is used but not exposed as KG)

## Content to Add

- Server setup and deployment
- Database schema and migrations
- Environment configuration
- API authentication flow
- Memory system architecture diagrams
- Importance scoring algorithm details
- Hybrid search explanation
- Real code examples from server docs
