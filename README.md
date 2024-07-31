<div align="center">
  <h1>🐾 PawVoyage Backend API</h1>
</div>

This is the backend API for the PawVoyage application, which handles form submissions for NOC and Health certificates. The front-end: https://github.com/RuthBhatti/PawVage

## ✨ Features

- 📝 **NOC Form Submission:** Submit NOC forms for pet travel.
- 📝 **Health Certificate Submission:** Submit health certificates for pets.
- 📊 **Approval Tracking:** Tracks the approval process for each submitted document.
- 🛠️ **Simulated API:** Simulates the submission of forms to government agencies.

## 📋 Requirements

- Node.js

## 🚀 Installation

1. Clone the repository:

    ```sh
    git clone git@github.com:RuthBhatti/PawVage-back-end-API.git
    cd PawVage-back-end-API
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## ⚙️ Configuration

Create a `.env` file in the root directory and add any necessary environment variables. For example:

```env
PORT=8080
```

## ▶️ Running the Server

Start the server using the following command:

```sh
npm start
```

The server will start on the port specified in your `.env` file, or default to port 8080 if not specified.

## 🔍 API Endpoints

### 📝 NOC Form

- **URL:** `/api/noc-form`
- **Method:** `POST`
- **Description:** Submits the NOC form.

**Request Body:**

```json
{
  "country": "string",
  "name": "string",
  "tellno": "string",
  "mail": "string",
  "dateofim": "string",
  "list": "string",
  "purpose": "string",
  "entry": "string",
  "dogname": "string",
  "dogsex": "string",
  "dogbreed": "string",
  "dib": "string",
  "mic": "string",
  "orgin": "string",
  "color": "string",
  "curdate": "string",
  "sign": "string",
  "meddate": "string",
  "medsign": "string"
}
```

**Response:**

```json
{
  "message": "NOC form submitted successfully!",
  "formData": { ... }
}
```

### 📝 Veterinary Health Certificate Form

- **URL:** `/api/vet-form`
- **Method:** `POST`
- **Description:** Submits the Veterinary Health Certificate form.

**Request Body:**

```json
{
  "vet": "string",
  "doi": "string",
  "certificate": "string",
  "con1": "string",
  "con2": "string",
  "origin": "string",
  "state": "string",
  "place": "string",
  "port": "string",
  "estimated": "string",
  "transport": "string",
  "permit": "string",
  "permit2": "string",
  "des": "string",
  "quant": "string",
  "pack": "string",
  "add": "string",
  "seal": "string",
  "commo": "string",
  "type": "string",
  "mic": "string",
  "breed": "string",
  "dob": "string",
  "sex": "string",
  "color": "string",
  "ct": "string"
}
```

**Response:**

```json
{
  "message": "Veterinary Health Certificate form submitted successfully!",
  "formData": { ... }
}
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## 📧 Contact

For any questions or concerns, please contact Ruth Bhatti at [bhattibuddy2@gmail.com).
```
