import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message, ChatSession, ChatResponse, AIService } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:3000/api'; // Update this with your actual API URL

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
    return this.http.get<AIService[]>(`${this.apiUrl}/chat/services`);
  }
} 