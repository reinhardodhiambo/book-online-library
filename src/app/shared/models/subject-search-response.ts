import {Work} from "@shared/models/work";

export class SubjectSearchResponse {
  key?: string;
  name?: string;
  subject_type?: string;
  work_count?: number;
  works?: Work[];

  constructor(data?: any) {
    if (data) {
      this.key = data.key;
      this.name = data.name;
      this.subject_type = data.subject_type;
      this.work_count = data.work_count;
      this.works = data.works ? data.works.map((workData: any) => new Work(workData)) : [];
    }
  }
}
