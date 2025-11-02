import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  EmailSettings,
  EmailSettingsResponse,
  EmailSettingsResult,
} from '../../models/api/smtp.model';
import { api_routes } from '../../../utils/routes/api.route';

@Injectable({
  providedIn: 'root',
})
export class SmtpService {
  constructor(private httpClint: HttpClient) {}

  getMyEmailSettings(): Observable<EmailSettingsResult> {
    return this.httpClint.get<EmailSettingsResult>(
      api_routes.getMyEmailSettings
    );
  }

  updateAllSettings(payload: EmailSettingsResponse): Observable<EmailSettings> {
    return this.httpClint.put<EmailSettings>(
      api_routes.updateAllSettings,
      payload
    );
  }
}
