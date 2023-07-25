export const fromTimeSlotsIn24HRFormat = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export const toTimeSlotsIn24HRFormat = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "24:00",
];

export const typesOfDays = [
  {
    name: "Working",
    from: "08:00",
    to: "20:00",
  },
  {
    name: "Half-day",
    from: "08:00",
    to: "15:00",
  },
  {
    name: "Holiday",
    from: "00:00",
    to: "00:00",
  },
  {
    name: "Custom",
  },
];

export class TimeSlot {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  setIsActive(active) {
    this.active = active;
  }

  equals(other) {
    if (!(other instanceof TimeSlot)) {
      return false;
    }
    return this.from === other.from && this.to === other.to;
  }

  hashCode() {
    let hash = 17;
    hash = hash * 31 + this.from.hashCode();
    hash = hash * 31 + this.to.hashCode();
    return hash;
  }

  static compareHours(hour1, hour2) {
    const date1 = new Date(`2000-01-01T${hour1}`);
    const date2 = new Date(`2000-01-01T${hour2}`);

    if (date1 < date2) {
      return -1;
    } else if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  }
}

export const generateTimeSlots = (timeSlots) => {
  // Sort the time slots based on the starting time
  const sortedSlots = timeSlots.sort((a, b) => {
    const aStartTime = parseInt(a.from.split(":")[0]);
    const bStartTime = parseInt(b.from.split(":")[0]);
    return aStartTime - bStartTime;
  });

  const generatedSlots = new CustomSet();

  // Generate the individual time slots for each time slot object
  for (const slot of sortedSlots) {
    const startTime = parseInt(slot.from.split(":")[0]);
    const endTime = parseInt(slot.to.split(":")[0]);

    for (let i = startTime; i < endTime; i++) {
      generatedSlots.add(new TimeSlot(`${i}:00`, `${i + 1}:00`));
    }
  }

  return Array.from(generatedSlots);
};

class CustomSet extends Set {
  add(value) {
    for (const item of this) {
      if (item.equals(value)) {
        return this;
      }
    }
    super.add(value);
    return this;
  }
}
