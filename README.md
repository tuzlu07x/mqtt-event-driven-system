# MQTT Event-Driven Architecture with NestJS 🚀

This project demonstrates the use of **MQTT** and **Event-Driven Architecture** with **NestJS**. It simulates a real-time system where sensor data is published, consumed, and stored efficiently in a database.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How It Works](#how-it-works)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## 📖 About the Project

This project showcases:

- Real-time data communication using **MQTT**.
- Storing sensor data (temperature and humidity) in **PostgreSQL**.
- Simulating IoT data streams using **Cron Jobs**.
- A scalable architecture built with **NestJS** and **TypeORM**.

---

## 🛠️ Technologies Used

- **NestJS**: Backend framework.
- **MQTT**: Real-time messaging protocol.
- **PostgreSQL**: Database for storing sensor data.
- **TypeORM**: For interacting with the database.
- **Redis**: Caching and pub/sub support.
- **Docker**: Containerized environment setup.

---

## ⚙️ Setup and Installation

### Prerequisites

- Docker & Docker Compose installed
- Node.js & npm installed locally (if running without Docker)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mqtt-event-driven.git
   cd mqtt-event-driven
   ```
2. Start the Docker containers:

```bash
Copy code
```

3. Access services:

- NestJS App: `http://localhost:3000`
- PostgreSQL: `localhost:5432`
- pgAdmin: `http://localhost:5050`
- Redis: `localhost:6379`
- MQTT Broker: `localhost:1883`

### 🔍 How It Works

1. MQTT Client: Connects to the MQTT broker and listens for messages on the sensor/data topic.
2. Cron Jobs: Publishes simulated sensor data (temperature and humidity) every 10 seconds.
3. Database Integration: Consumes the sensor data and stores it in PostgreSQL using TypeORM.

### 📦 Folder Structure

```bash
.
├── src
│   ├── app.module.ts      # Root module
│   ├── app.controller.ts  # Example controller
│   ├── sensor-data        # Sensor data feature module
│   │   ├── entities       # Database entity
│   │   ├── sensor-data.service.ts  # Core business logic
│   │   ├── sensor-data.controller.ts  # Controller for routes
├── docker-compose.yml      # Docker configuration
├── Dockerfile              # Application Dockerfile
├── README.md               # Project documentation

```
