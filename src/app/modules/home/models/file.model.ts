import { Subscription } from 'rxjs/internal/Subscription';

export interface FileUploadModel {
	data: File;
	state: string;
	inProgress: boolean;
	progress: number;
	canRetry: boolean;
	canCancel: boolean;
	sub?: Subscription;
  }