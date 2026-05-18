# Perfil del Sistema Perú Seguro

## 1. Identidad del Proyecto

**Perú Seguro** es un sistema de seguridad ciudadana que nace como proyecto de tesis de **Gabriel Polack Castillo** en el **Instituto SISE**. Su propósito original —obtener cifras y registrar faltas y delitos ocurridos en el país— se ha expandido para convertirse en una plataforma integral de monitoreo, medición y denuncia ciudadana.

## 2. Misión y Alcance

- **Monitorear y medir** la delincuencia, la corrupción y problemáticas nacionales mediante la recolección, análisis y visualización de datos.
- **Recibir denuncias** civiles, penales y administrativas por parte de la ciudadanía, canalizándolas hacia las entidades competentes.
- **Visibilizar indicadores** de seguridad ciudadana a través de tableros interactivos y reportes exportables.
- **Centralizar** la información dispersa en un solo portal accesible, moderno y seguro.

## 3. Stack Tecnológico

### Frontend (Cliente)

| Tecnología | Uso |
|---|---|
| **Next.js 15** (App Router, Turbopack) | Framework React con renderizado híbrido (SSR/SSG/CSR) |
| **TypeScript 5** | Tipado estático en toda la aplicación |
| **TailwindCSS 3** | Estilos utilitarios responsive |
| **Framer Motion** | Animaciones y transiciones |
| **Zod** | Validación de esquemas y formularios |
| **React Hook Form** | Manejo de formularios complejos |
| **Lucide React** | Iconografía |

### Backend (Servidor)

| Tecnología | Uso |
|---|---|
| **ASP.NET Core** | API REST monolítica modular |
| **Entity Framework Core** | ORM para acceso a datos |
| **SQL Server** | Base de datos relacional principal |
| **C#** | Lenguaje de programación del servidor |

> El backend sigue una arquitectura de **monolito modular**: un solo despliegue cuyos componentes internos (módulos) están separados por dominio de negocio (denuncias, usuarios, métricas, etc.), facilitando el mantenimiento y una eventual migración a microservicios.

### Infraestructura y DevOps

| Componente | Detalle |
|---|---|
| **Hosting** | Vercel (frontend Next.js) |
| **DNS** | Cloudflare |
| **WAF** | Cloudflare (Web Application Firewall) |
| **Contenerización** | Docker + Docker Compose |
| **CI/CD** | GitHub Actions |
| **Scripting** | Bash (scripts de setup y automatización) |
| **Licencia** | MIT |

## 4. Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────┐
│                    USUARIOS (Browser)                   │
├─────────────────────────────────────────────────────────┤
│                   Cloudflare DNS + WAF                  │
├────────────────────────┬────────────────────────────────┤
│                        │                                │
│         VERCEL         │         AZURE / DOCKER         │
│   ┌────────────────┐   │   ┌────────────────────────┐   │
│   │   Next.js 15   │   │   │  ASP.NET Core Monolith │   │
│   │  (App Router)  │◄──┼──►│  ┌──────────────────┐  │   │
│   │                │   │   │  │ Módulo Denuncias │  │   │
│   │ • Páginas SSR  │   │   │  │ Módulo Usuarios  │  │   │
│   │ • API Routes   │   │   │  │ Módulo Métricas  │  │   │
│   │ • Middleware   │   │   │  │ Módulo Reportes  │  │   │
│   └────────────────┘   │   │  │ Módulo Auth      │  │   │
│                        │   │  └──────────────────┘  │   │
│                        │   │         │              │   │
│                        │   │         ▼              │   │
│                        │   │  ┌────────────┐        │   │
│                        │   │  │ SQL Server │        │   │
│                        │   │  └────────────┘        │   │
│                        │   └────────────────────────┘   │
├────────────────────────┴────────────────────────────────┤
│                 GitHub Actions (CI/CD)                  │
└─────────────────────────────────────────────────────────┘
```

### Flujo de datos principal

1. El usuario accede vía HTTPS (protegido por Cloudflare WAF).
2. Next.js sirve las páginas (SSR/SSG) o las renderiza en cliente.
3. Las denuncias y operaciones CRUD se envían a la API de ASP.NET Core.
4. Entity Framework persiste los datos en SQL Server.
5. Los reportes y dashboards se generan consultando la API.

## 5. Módulos del Sistema

### 5.1 Frontend (Next.js)

| Módulo / Ruta | Descripción |
|---|---|
| `/(auth)` | Autenticación (login, registro, recuperación) |
| `/dashboard` | Tablero principal con indicadores y métricas |
| `/denuncia` | Formulario y gestión de denuncias |
| `/portal` | Portal público de transparencia y consulta |
| `/components` | Componentes reutilizables (UI, mapas, gráficos) |
| `/services` | Servicios de conexión con la API |
| `/interfaces` | Tipos e interfaces TypeScript |
| `/constants` | Constantes y configuración |
| `/utils` | Utilidades y helpers |

### 5.2 Backend (ASP.NET Core — en desarrollo)

| Módulo | Responsabilidad |
|---|---|
| **Módulo Denuncias** | CRUD de denuncias civiles, penales y administrativas; clasificación y estado |
| **Módulo Usuarios** | Registro, perfiles, roles y permisos |
| **Módulo Métricas** | Cálculo de indicadores de delincuencia, corrupción y problemáticas nacionales |
| **Módulo Reportes** | Generación de reportes PDF/Excel exportables |
| **Módulo Auth** | Autenticación JWT |

## 6. DevOps y Despliegue

- **GitHub Actions**: Pipeline de integración continua (lint, build, test) y despliegue automático a Vercel.
- **Docker**: Contenedor del backend ASP.NET Core y SQL Server para entornos de desarrollo y staging.
- **Vercel**: Hosting del frontend Next.js con despliegues automáticos desde `main`.
- **Cloudflare**: Protección DNS y WAF; mitigación de ataques DDoS y filtrado de tráfico malicioso.

## 7. Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Ver el archivo [`LICENSE.md`](../LICENSE.md) para más detalles.
