import { IsDefined, IsNumber } from 'class-validator';

/**
 * Configuration for webserver
 */
export class WebServerConfiguration {

  @IsDefined()
  @IsNumber()
  port: number;
}
