function simulateProgress(startTime) {
    const lines = [];
    let elapsed = 9;
    let progress = 14.60;
    let remaining = 58;
    
    // Loop until we hit ~100%
    while (progress < 99) {
      const etcTime = new Date(startTime.getTime() + (elapsed + remaining) * 1000);
      const etcString = etcTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      
      lines.push(
        `Stats: 0:00:${String(elapsed).padStart(2, '0')} elapsed; 0 hosts completed (1 up), 1 undergoing Connect Scan`,
        `Connect Scan Timing: About ${progress.toFixed(2)}% done; ETC: ${etcString} (0:00:${String(remaining).padStart(2, '0')} remaining)`
      );
      
      elapsed++;
      progress += 3 + Math.random() * 5; // Jump 3-8% each time
      remaining = Math.max(0, remaining - 5); // Decrease remaining, don't go negative
    }
    
    return lines.join('\n');
  }
  
  module.exports = simulateProgress;