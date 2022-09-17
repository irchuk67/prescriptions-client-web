import axios from "axios";

const baseURL = 'http://localhost:8000/api';
const Receipts = axios.create({
    baseURL
});

const getReceipts = async () => await Receipts.get('/receipts');

export {getReceipts}