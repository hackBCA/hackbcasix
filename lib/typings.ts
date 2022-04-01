export interface ScheduleEntry {
    type: "workshop" | "activity" | "meal" | "ceremony" | "misc";
    name: string;
    start: Date;
    end?: Date;
    location?: string;
    description?: string;
    requirements?: string;
    beginner?: true;
    presenter?: string;
}
