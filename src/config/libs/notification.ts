import {
  format,
  isThisMonth,
  isThisWeek,
  isThisYear,
  isToday,
  parseISO,
} from 'date-fns';

interface Notification {
  id: number;
  read: boolean;
  image: string;
  message: string;
  time: number;
}

interface ProcessedTime {
  today: Notification[];
  thisWeek: Notification[];
  thisMonth: Notification[];
  thisYear: Notification[];
  older: Notification[];
}

interface ProcessedNotification {
  tag: string;
  notifications: Notification[];
}

const getTimeAgo = (timestamp: number): string => {
  const date = parseISO(new Date(timestamp * 1000).toISOString());

  if (isToday(date)) {
    return 'today';
  } else if (isThisWeek(date)) {
    return 'this week';
  } else if (isThisMonth(date)) {
    return 'this month';
  } else if (isThisYear(date)) {
    return 'this year';
  } else {
    return format(date, 'dd MMM, yyyy');
  }
};

export const processNotifications = (
  notifications: Notification[]
): ProcessedNotification[] => {
  const processedTime: ProcessedTime = {
    today: [],
    thisWeek: [],
    thisMonth: [],
    thisYear: [],
    older: [],
  };

  notifications.forEach((notification) => {
    const timeAgo = getTimeAgo(notification.time);

    switch (timeAgo) {
      case 'today':
        processedTime.today.push(notification);
        break;
      case 'this week':
        processedTime.thisWeek.push(notification);
        break;
      case 'this month':
        processedTime.thisMonth.push(notification);
        break;
      case 'this year':
        processedTime.thisYear.push(notification);
        break;
      default:
        processedTime.older.push(notification);
    }
  });
  const result = [
    { tag: 'Today', notifications: processedTime.today },
    { tag: 'This Week', notifications: processedTime.thisWeek },
    { tag: 'This Month', notifications: processedTime.thisMonth },
    { tag: 'This Year', notifications: processedTime.thisYear },
    { tag: 'Old', notifications: processedTime.older },
  ];

  return result;
};
