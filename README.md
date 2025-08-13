# AI Image Generator

A powerful and easy-to-use application that generates stunning images from text prompts using the latest advancements in artificial intelligence.

## 📝 Overview

This AI Image Generator allows you to bring your creative ideas to life. Simply enter a descriptive text prompt, and the AI will generate a unique, high-quality image based on your input. The application is designed with a clean interface for a seamless user experience.

This project requires you to use your own API key from the AI model provider (e.g., OpenAI, Google AI, Stability AI) to access the image generation capabilities.

## ✨ Features

* **Text-to-Image Generation:** Convert your text descriptions into beautiful images.
* **Simple & Clean UI:** An intuitive and easy-to-navigate interface.
* **Real-time Generation:** See results quickly (depending on the API provider).
* **History:** (Optional: Add this if you have a history feature) View your previously generated images.
* **Secure API Key Handling:** Your API key is stored locally on your machine and is never shared.

## ⚙️ Prerequisites

Before you begin, ensure you have the following:

1.  **An API Key:** You must have a valid API key from an AI image generation service provider.
    * Get an OpenAI API key from [platform.openai.com](https://platform.openai.com/)
    * Get a Google AI API key from [makersuite.google.com](https://makersuite.google.com/)
    * Get a Stability AI API key from [platform.stability.ai](https://platform.stability.ai/)

2.  **Node.js & npm:** This project requires Node.js and its package manager, npm. You can download them from [nodejs.org](https://nodejs.org/).

## 🚀 Installation & Setup

Follow these steps to get the application running on your local machine.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/ai-image-generator.git](https://github.com/your-username/ai-image-generator.git)
    cd ai-image-generator
    ```

2.  **Install Dependencies:**
    Install the necessary packages using npm.
    ```bash
    npm install
    ```

3.  **Set Up Your API Key:**
    The most crucial step is to configure your API key.
    * Find the configuration file. It might be named `.env`, `config.js`, or a similar name.
    * In this project, create a file named `.env` in the root directory of the project.
    * Add your API key to this file as shown below:

    ```
    # .env file
    API_KEY="your_api_key_goes_here"
    ```
    **Important:** Do not share this file or commit it to version control. The `.gitignore` file should already be configured to ignore `.env` files.

4.  **Run the Application:**
    Start the development server.
    ```bash
    npm start
    ```
    The application should now be running. Open your web browser and navigate to `http://localhost:3000` (or the port specified in your project's configuration).

## 💡 How to Use

1.  **Launch the App:** Once the installation is complete, open the application in your browser.
2.  **Find the Input Field:** Locate the text box labeled "Enter your prompt here".
3.  **Enter Your API Key:** The application will prompt you for your API key upon first use. Paste your key into the designated field.
4.  **Write a Prompt:** Describe the image you want to create. Be as descriptive as possible for the best results.
    * *Example: "A majestic lion with a crown made of stars, sitting on a throne on the moon, cinematic lighting."*
5.  **Generate:** Click the "Generate" button and wait for the AI to create your image.
6.  **View & Download:** Your generated image will appear on the screen. You can right-click to save it or use the provided download button.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features, improvements, or bug fixes, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourAmazingFeature`).
3.  Make your changes and commit them (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/YourAmazingFeature`).
5.  Open a Pull Request.
