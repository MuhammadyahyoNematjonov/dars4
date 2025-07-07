import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Yer Shakli</title>
      <style>
        body {
          background-color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .earth {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle at 30% 30%, #3fa9f5, #0b3d91);
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(63, 169, 245, 0.6);
          position: relative;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .earth::before {
          content: '';
          position: absolute;
          width: 40px;
          height: 20px;
          background-color: green;
          border-radius: 50%;
          top: 50px;
          left: 60px;
          transform: rotate(45deg);
        }

        .earth::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 15px;
          background-color: green;
          border-radius: 50%;
          top: 110px;
          left: 120px;
          transform: rotate(-30deg);
        }
      </style>
    </head>
    <body>
      <div class="earth"></div>
    </body>
    </html>
    `;
  } 
}
