
export interface Entry {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  memo: string;
  memo2: string;
}

export function parseTSV(data: string): Entry[] {
    return data.trim().split('\n').map(line => {
      const [startDate, endDate, startTime, endTime, memo, memo2] = line.split('\t');
      return { startDate, endDate, startTime, endTime, memo, memo2 };
    });
  }
  
  export   function splitEntryByMonth(entry: Entry): Entry[] {
    const result: Entry[] = [];
    const start = new Date(entry.startDate);
    const end = new Date(entry.endDate);
  
    let current = new Date(start);
    while (current <= end) {
      const month = current.getMonth();
      const year = current.getFullYear();
  
      const monthEnd = new Date(year, month + 1, 0);
      const subStart = new Date(Math.max(current.getTime(), start.getTime()));
      const subEnd = new Date(Math.min(monthEnd.getTime(), end.getTime()));
  
      var r = {
        startDate: subStart.toISOString().split('T')[0] + `T00:00:00`,
        endDate: subEnd.toISOString().split('T')[0] + `T00:00:00`,
        startTime: entry.startTime,
        endTime: entry.endTime,
        memo: entry.memo,
        memo2: entry.memo2
      }
    
      result.push(r);
  
      // Move to first of next month
      current = new Date(year, month + 1, 1);
    }
  
    return result;
  }
  
  export function formatDateList(start: Date, end: Date): string {
    const msPerDay = 1000 * 60 * 60 * 24;
    const numDays = Math.round((end.getTime() - start.getTime()) / msPerDay) + 1;
  
    if (numDays <= 4) {
      const dates : string[] = [];
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        var dateString = d.toLocaleDateString('en-US', 
          { weekday: 'short', month: 'long', day: 'numeric' }
        );
        dates.push(dateString);
      }
      return dates.join('<br/>');
    } else {
      return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`;
    }
  }
  
  export function formatTimeRange(start: string, end: string): string {  
  
    if(!start.includes(':'))
      return '';//'CLOSED';
  
    const [startH] = start.split(':');  
    const [endH] = end.split(':');
    
    return `${startH} - ${endH} pm`;
  }
  