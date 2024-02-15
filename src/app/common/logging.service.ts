import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logInfo(str: string) {
    console.log('LoggingService:logInfo() -' + str);
  }

  logDebug(str: string) {
    console.log('LoggingService:logDebug() -' + str);
  }

  logError(str: string) {
    console.log('LoggingService:logError() -' + str);
  }

}
