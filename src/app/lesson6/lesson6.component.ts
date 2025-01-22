import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lesson6',
  imports: [MatIconModule],
  templateUrl: './lesson6.component.html',
  styleUrl: './lesson6.component.css'
})
export class Lesson6Component {
  @ViewChild('textDiv') textDiv!: ElementRef;
  
    private utterance: SpeechSynthesisUtterance | null = null;
    public isPlaying: boolean = false;  // Change to public so it can be accessed in the template
  
    ngAfterViewInit(): void {
      if (!this.textDiv) {
        console.error('textDiv not found!');
      }
    }
  
    // Toggle Play/Pause
    toggleVoice(): void {
      const text = this.textDiv?.nativeElement?.innerText || '';
      if (!this.utterance) {
        // Create a new SpeechSynthesisUtterance instance
        this.utterance = new SpeechSynthesisUtterance(text);
        this.utterance.lang = 'en-US'; // Set language
        speechSynthesis.speak(this.utterance); // Start speaking
        this.isPlaying = true;
      } else if (speechSynthesis.paused) {
        // Resume if paused
        speechSynthesis.resume();
        this.isPlaying = true;
      } else {
        // Pause if speaking
        speechSynthesis.pause();
        this.isPlaying = false;
      }
    }
  
    // Stop Voice
    stopVoice(): void {
      if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        this.utterance = null; // Reset the utterance
        this.isPlaying = false;
      }
    }
  

}
