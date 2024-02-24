import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'file_upload_new';

  // constructor(private api: axios:0any){}

  uploadMulti(event: any){
    const files: FileList = event.target.files;
    console.log(files)

    const formdata=  new FormData()

    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      formdata.append('files',element)
    }

    axios.post('http://localhost:4000/multiupload',formdata)
    // files.forEach((element)=>{
    //   console.log(element)
    // })

  }


  upload(event: any){
      const file = event.target.files[0];
      console.log(file)
      // const formdata=  new FormData()
      // formdata.append('file',file)
      // axios.post('http://localhost:4000/upload',formdata)
  }

 
    // console.log(file)
    // const formdata=  new FormData()
    // formdata.append('file',file)
    // axios.post('http://localhost:4000/upload',formdata)
  
}
