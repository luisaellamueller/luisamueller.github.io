body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    color: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: rgba(255, 255, 255, 0.2);
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#yesButton {
    background: #28a745;
    color: #fff;
}

#noButton {
    background: #dc3545;
    color: #fff;
}

/* Modal styling */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: #333;
}

.modal-content button {
    background: #007bff;
    color: #fff;
    font-size: 14px;
}
