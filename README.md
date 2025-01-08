# Alexa-Multi-Skill-Integration

A TypeScript-based Alexa skill project that demonstrates the integration of multiple skills (Custom + Smart-Home Skills), currently featuring:

- A **Joke skill** that fetches and tells jokes using the JokeAPI.
- A **Smart-Home skill** to control a light bulb by turning it on and off. 🚀

---

## 🌟 Features

- **Custom Alexa and Smart-Home Alexa Skill Integration** using the ASK SDK.
- **Joke Skill**: Fetches random jokes from the JokeAPI and delivers them with flair. 😄
- **Smart-Home Skill**: Controls smart devices like light bulbs for seamless automation.
- **TypeScript-Powered**: Ensures type safety and a better development experience.
- **Dockerized**: Simplified setup and deployment with Docker.
- **Automated CI/CD Pipeline**: CircleCI is used for seamless builds and deployments.

---

## ✅ Prerequisites

Before you begin, ensure you have the following:

- **AWS Account**: To deploy the Alexa skills as Lambda functions.
- **Amazon Developer Account**: To register and manage your Alexa skills.
- **Docker**: For local development and containerization.
- **AWS CLI**: For ECR and Lambda integration.

---

## ⚙️ Configuration

The project uses a flexible configuration system to manage external services:

1. **JokeAPI Configuration**: Set the JokeAPI URL in `src/config/config.ts`.
2. **Smart-Home Skill Configuration**: Configure the light bulb endpoints and states in `src/config/smart-home-config.ts`.
3. **Environment-Specific Configurations**: Use `.env` files to manage variables for different environments.

---

## 🛠️ Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/solomonjdavid001/Alexa-Multi-Skill-Integration
   ```

2. Build the Docker container:

   ```bash
   docker build -t alexa-multi-skill .
   ```

3. Run the project locally:

   ```bash
   docker run alexa-multi-skill
   ```

---

## 🚀 Deployment

### Deploy to AWS Lambda

1. Build the project for production:

   ```bash
   npm run build
   ```

2. Create a Docker image and push to AWS Elastic Container Registry (ECR):

   ```bash
   # Authenticate Docker with ECR
   aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-ecr-repo>

   # Tag the Docker image
   docker tag alexa-multi-skill <your-ecr-repo>:<tag>

   # Push the Docker image to ECR
   docker push <your-ecr-repo>:<tag>
   ```

3. Deploy the ECR image to AWS Lambda:

   ```bash
   aws lambda update-function-code --function-name <your-lambda-function> --image-uri <your-ecr-repo>:<tag>
   ```

### Automated CI/CD with CircleCI

The project uses CircleCI to automate builds and deployments:

1. Update the `.circleci/config.yml` file with your AWS credentials and ECR details.
2. Commit and push your changes. CircleCI will handle the rest. 🚀

---

## 🎯 Future Enhancements

- Add more Alexa skills (e.g., Trivia, Weather Updates).
- Expand smart-home device controls (e.g., thermostats, locks).
- Implement a robust logging and monitoring system.
- Expand support for multi-language jokes.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 🤝 Contributions

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

---

Happy coding! 🎉
