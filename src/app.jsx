// import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import jojo_logo from './assets/allstarbattler.png'
import github_logo from './assets/gh.png'
import xbox_logo from './assets/xbox.svg'
import Video1 from './assets/Ermes_Vs_Dio.mp4'
import Video2 from './assets/Dio_Vs_Mariah.mp4'
import Video3 from './assets/Jolyne_Vs_Dio.mp4'
import './assets/w3.css'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div class="w3-bar w3-purple w3-round-large w3-center w3-margin navbar " style="">
        <a href="/" class="w3-bar-item">
          <img src={jojo_logo} class="w3-bar-item w3-button w3-round-large" alt="Jojo logo" style="width: 330px;" />
        </a>
        <h2 class="w3-animate-zoom btxt">Battle Clips!</h2>
      </div>


      <div class="w3-card-4 w3-container w3-padding w3-round-large w3-margin w3-purple">
        <h2 class="w3-mobile  w3-container">Overview</h2>
        <p class="viewblurb">This fansite contains clips from one of my favorite games; Jojo's Bizarre Adventure All Star Battle R For the Xbox Series S.</p>
      </div>


      <div class="w3-card-4 w3-padding w3-round-large w3-margin w3-purple  " style="">
      <h2 class="w3-mobile  w3-container">Battles</h2>
      <div class="w3-round-large viddiv  " style="display:block;">
        {/* Video Section Starts line below */}
        <div class="w3-border w3-padding w3-container w3-round-large w3-center">
        <h2 class="w3-center"> Ermes Costello (Part 6) Vs. Dio Brando (Part 1)</h2>
        <video width="720" height="480" class="vidcont" controls poster={jojo_logo}>
            <source src={Video1} type="video/mp4" class=""></source>
        </video>
        </div>
        <hr></hr>
        <div class="w3-border w3-padding w3-container w3-round-large w3-center">
        <h2 class="w3-center"> Dio Brando (Part 1) Vs. Mariah (Part 3)</h2>
        <video width="720" height="480" class="vidcont" controls poster={jojo_logo}>
            <source src={Video2} type="video/mp4"></source>
        </video>
        </div>
        <hr></hr>
        <div class="w3-border w3-padding w3-container w3-round-large w3-center">
        <h2 class="w3-center"> Jolyne Cujoh (Part 6) Vs. DIO (Part 3)</h2>
        <video width="720" height="480" class="vidcont" controls poster={jojo_logo}>
            <source src={Video3} type="video/mp4"></source>
        </video>
        </div>
        <hr></hr>
 
      </div>
  </div>

{/* This is the Footer div block */}
  <div class="w3-card-4 w3-padding w3-round-large w3-margin footer w3-purple" >
    <h2>Website Created by markmental</h2>
      <a href="https://preactjs.com" target="_blank">
        <div class="w3-padding" style="display:flex; margin:6px; font-size:13px;">Made With: 
          <img src={preactLogo} class="w3-bar-item w3-padding w3-round-large" alt="Preact logo" style="width: 60px;" />
        </div>
      </a>
      <a href="https://github.com/MARKMENTAL" target="_blank">
        <div class="w3-padding" style="display:flex; margin:6px; font-size:13px;">My GitHub: 
          <img src={github_logo} class="w3-bar-item w3-padding w3-round-large" alt="Preact logo" style="width: 60px;" />
        </div>
      </a>
      <a href="http://live.xbox.com/Profile?Gamertag=markmental611" target="_blank">
        <div class="w3-padding" style="display:flex; font-size:12px; margin:3px;"> Xbox Profile: 
          <img src={xbox_logo} class="w3-bar-item w3-padding w3-round-large" alt="Preact logo" style="width: 60px;" />
        </div>
      </a>
  </div>
    </>
  )
}