export const code = `.face {
  position: relative;
  width: 280px;
  height: 200px;
  background-color: #fad31d;
  overflow: hidden;
}

.eyes {
  display: inline-block;
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #222;
  border: 2px solid #000;
  border-radius: 50%;
}

.left-eye {
  left: 50px;
}

.left-eye::before {
  content: '';
  display: block;
  position: relative;
  left: 15px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50%;
}

.right-eye {
  right: 50px;
}

.right-eye::before {
  content: '';
  display: block;
  position: relative;
  left: 5px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50%;
}

.nose {
  position: absolute;
  top: 35px;
  left: 140px;
  border: 10px solid;
  border-color: #000 transparent 
  transparent transparent;
  border-radius: 50%;
}

.cheeks {
  display: inline-block;
  position: absolute;
  width: 65px;
  height: 65px;
  top: 60px;
  background-color: #f31a10;
  border: 2px solid #222;
  border-radius: 50%;
  z-index: 20;
}

.left-cheek {
  left: 10px;
}

.right-cheek {
  right: 10px;
}

.lips {
  display: inline-block;
  position: absolute;
  top: 55px;
  width: 45px;
  height: 20px;
  background-color: #fad31d;
  border-bottom: 2px solid #222;
  z-index: 20;
}

.left-lip {
  left: 105px;
  border-right: none;
  border-bottom-left-radius: 40px 30px;
  transform: rotateZ(-20deg);
}

.right-lip {
  right: 105px;
  border-left: none;
  border-bottom-right-radius: 40px 30px;
  transform: rotateZ(20deg);
}

.mouth-wrapper {
  position: relative;
  top: 65px;
  width: 300px;
  height: 110px;
  background-color: #fad31d;
  border-radius: 50%;
  z-index: 10;
  overflow: hidden;
}

.mouth {
  display: inline-block;
  position: absolute;
  bottom: 15px;
  left: 100px;
  width: 100px;
  height: 450px;
  background-color: #6f030e;
  border: 2px solid #222;
  border-radius: 50%;
  overflow: hidden;
}

.tongue {
  display: block;
  position: absolute;
  bottom: -45px;
  width: 100px;
  height: 120px;
  background-color: #9e242d;
  border: 2px solid #222;
  border-radius: 50%;
}

.tongue::before {
  content: '';
  display: block;
  position: relative;
  bottom: -15px;
  width: 100px;
  height: 120px;
  background-color: #d85b5e;
  border-radius: 50%;
}

.chin {
  position: absolute;
  bottom: 0;
  left: 110px;
  width: 80px;
  height: 120px;
  background-color: #d99c25;
  border-radius: 50%;
  overflow: hidden;
}

.chin::before {
  content: '';
  display: block;
  position: relative;
  left: -20px;
  bottom: -20px;
  width: 120px;
  height: 80px;
  background-color: #fad31d;
  border-radius: 50%;
}`;
