document.addEventListener("DOMContentLoaded", () => {
    const padZero = (number) => number.toString().padStart(2, '0');
  
    const now = new Date();
    const utcYear = now.getUTCFullYear();
    const utcMonth = padZero(now.getUTCMonth() + 1); 
    const utcDate = padZero(now.getUTCDate());
    const utcHours = padZero(now.getUTCHours());
    const utcMinutes = padZero(now.getUTCMinutes());
    const utcSeconds = padZero(now.getUTCSeconds());
  
    const formattedDate = `${utcYear}-${utcMonth}-${utcDate}`;
    const formattedTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
  
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
  
    currentTimeElement.innerHTML = `Current Time (UTC): ${formattedTime}`;
    currentDayElement.innerHTML = `Current Day: ${formattedDate}`;
  });
  