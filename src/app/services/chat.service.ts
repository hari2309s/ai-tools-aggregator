import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Message, ChatSession, ChatResponse, AIService } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(`${this.apiUrl}/chat`, { message });
  }

  getChatHistory(): Observable<ChatSession[]> {
    return this.http.get<ChatSession[]>(`${this.apiUrl}/chat/history`);
  }

  createNewChat(): Observable<ChatSession> {
    return this.http.post<ChatSession>(`${this.apiUrl}/chat/new`, {});
  }

  getAvailableServices(): Observable<AIService[]> {
    return this.http.get<{ services: AIService[] }>(`${this.apiUrl}/services`).pipe(
      map(response => response.services)
    );
  }

  addService(service: { provider: string; apiKey: string; model?: string }): Observable<AIService> {
    const backendService = {
      name: service.provider,
      apiKey: service.apiKey
    };
    return this.http.post<{ message: string }>(`${this.apiUrl}/services`, backendService).pipe(
      map(() => ({
        name: service.provider,
        capabilities: {
          multimodal: false,
          supportedLanguages: ['en'],
          specializations: ['general']
        }
      }))
    );
  }
} 