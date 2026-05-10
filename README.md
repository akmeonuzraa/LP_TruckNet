# TruckNet

**Intelligence au coeur du transport routier marocain**

TruckNet est une solution B2B SaaS de gestion de flottes conçue spécifiquement pour le transport routier au Maroc. Notre plateforme combine IoT, IA et analytics pour optimiser la sécurité, la conformité ESG et la chaîne du froid.

---

## Le Problème

Le secteur du transport routier au Maroc fait face à des défis majeurs :

- **30% d'accidents** sont liés à la fatigue et la distraction des conducteurs
- **Conformité ESG** inexistante pour les flottes de transport
- **40% de pertes** de denrées périssables dues à des ruptures de chaîne du froid

---

## Nos Modules

### SafeDetect
Système de détection de fatigue et distraction en temps réel.

| Spécification | Valeur |
|---------------|--------|
| Latence | < 50ms |
| Précision | 98.5% |
| Connectivité | 4G/WiFi |

**Technologies:** ESP32-CAM, Edge TPU, YOLOv8-nano

---

### TruckNet Core
Plateforme centrale de gestion de flotte avec dashboard temps réel.

| Spécification | Valeur |
|---------------|--------|
| Véhicules | Illimité |
| Rafraîchissement | 1s |
| Historique | 2 ans |

**Technologies:** React, FastAPI, PostgreSQL, Kafka, Grafana

---

### ColdChain
Monitoring intelligent de la chaîne du froid avec alertes prédictives.

| Spécification | Valeur |
|---------------|--------|
| Précision | ±0.1°C |
| Autonomie | 30 jours |
| Alertes | < 5s |

**Technologies:** Raspberry Pi 4, LoRaWAN, InfluxDB, TensorFlow Lite

---

## Stack Technique

### Hardware
- ESP32-CAM
- Raspberry Pi 4
- Edge TPU
- LoRaWAN

### Software
- React
- FastAPI
- PostgreSQL
- Kafka
- Grafana
- InfluxDB

### AI/ML
- YOLOv8
- TensorFlow Lite
- OpenCV

---

## L'Équipe

| Nom | Rôle |
|-----|------|
| **Youssef Lachgar** | CEO & Co-founder |
| **Mohamed Amine Lachgar** | CTO & Co-founder |
| **Mehdi Douch** | Hardware Lead |
| **Ahmed Himmiche** | ML Engineer |
| **Salma Bouhou** | Product Manager |

---

## Contact

Intéressé par une démo ? Contactez-nous :

**Email:** [contact@trucknet.ma](mailto:contact@trucknet.ma)

---

## Développement

Ce projet utilise [Next.js](https://nextjs.org) avec l'App Router.

### Installation

```bash
npm install
```

### Développement local

```bash
npm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm build
```

---

## Licence

© 2026 TruckNet. Tous droits réservés.
