import axios from "axios";

const baseURL = 'https://receipts-server.herokuapp.com/api';
const Receipts = axios.create({
    baseURL
});

const getReceipts = async () => await Receipts.get('/receipts');

export {getReceipts}