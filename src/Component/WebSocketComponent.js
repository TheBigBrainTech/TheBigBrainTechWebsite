import React, { useEffect } from 'react';
import WebSocket from 'websocket'; // Replace 'websocket' with the correct package name if you are using a different library


const WebSocketComponent = () => {
    useEffect(() => {
      // Replace this URL with your WebSocket server URL
      const socketUrl = 'ws://teksyntax-env.eba-avpbvgps.us-east-1.elasticbeanstalk.com:8080/ws';
      const webSocket = new WebSocket(socketUrl);
  
      webSocket.onopen = () => {
        console.log('WebSocket connection established.');
        // You can perform any actions that need to happen after the connection is established here.
      };
  
      webSocket.onmessage = (event) => {
        console.log('Message received:', event.data);
        // Handle incoming messages from the server here.
      };
  
      webSocket.onerror = (error) => {
        console.error('WebSocket error:', error);
        // Handle any errors that occur during the WebSocket connection.
      };
  
      webSocket.onclose = (event) => {
        console.log('WebSocket connection closed:', event.code, event.reason);
        // Perform any necessary actions when the connection is closed.
      };
  
      // Clean up the WebSocket connection when the component unmounts
      return () => {
        webSocket.close();
      };
    }, []);
  
    return (
      <div>
        {/* Your component's content goes here */}
      </div>
    );
  };
  
  export default WebSocketComponent;
  