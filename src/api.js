import axios from "axios";

const baseURL = 'http://ec2-52-206-170-81.compute-1.amazonaws.com:5000/api';
const baseLocalhost = 'http://localhost:5000/api';
const Server = axios.create({
    baseURL: baseLocalhost
});

const getReceipts = async () => await Server.get('/receipts');
const getReceiptById = async (id) => await Server.get(`/receipts/${id}`);
const deleteReceiptById = async (id) => await Server.delete(`/receipts/${id}`);
const createReceipt = async (text) => await Server.post('/receipts', {text: text});
const updateReceipt = async (id, text) =>await Server.put(`/receipts/${id}`, {text: text})


export {getReceipts, deleteReceiptById, getReceiptById, createReceipt, updateReceipt}