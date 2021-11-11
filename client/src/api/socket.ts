import { io } from 'socket.io-client';

const ENDPOINT = "http://localhost:4000/";

export const socket = io(ENDPOINT);

socket.on("connect", () => {
  console.log("Successfully connected");
})

socket.on("connect_error", () => {
  console.log("Connection error");
})

socket.on("disconnect", () => {
  console.log("Disconnected");
})
