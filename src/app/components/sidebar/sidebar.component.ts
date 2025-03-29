import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { AddServiceDialogComponent } from '../services/add-service-dialog/add-service-dialog.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatRippleModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() newChat = new EventEmitter<void>();
  
  // Sample data for available services
  availableServices: any[] = [
    { id: '1', name: 'OpenAI', icon: 'smart_toy' },
    { id: '2', name: 'Anthropic', icon: 'psychology' },
    { id: '3', name: 'Google AI', icon: 'cloud' }
  ];
  
  // Sample data for chat history
  chatHistory: any[] = [
    { id: '1', title: 'Website design', timestamp: new Date() },
    { id: '2', title: 'Marketing strategy', timestamp: new Date(Date.now() - 86400000) },
    { id: '3', title: 'Product roadmap', timestamp: new Date(Date.now() - 172800000) }
  ];
  
  constructor(private dialog: MatDialog) {}
  
  onNewChat(): void {
    this.newChat.emit();
  }
  
  openAddServiceDialog(): void {
    const dialogRef = this.dialog.open(AddServiceDialogComponent, {
      width: '350px',
      panelClass: 'custom-dialog'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Add the new service to the list
        const newService = {
          id: (this.availableServices.length + 1).toString(),
          name: result.provider,
          icon: this.getIconForProvider(result.provider)
        };
        this.availableServices.push(newService);
      }
    });
  }
  
  getIconForProvider(provider: string): string {
    switch(provider.toLowerCase()) {
      case 'openai': return 'smart_toy';
      case 'anthropic': return 'psychology';
      case 'google': return 'cloud';
      case 'cohere': return 'bubble_chart';
      case 'huggingface': return 'face';
      case 'replicate': return 'repeat';
      default: return 'api';
    }
  }
}
