class Clock:
    hour = 0
    minute = 0
    def __init__(self, hour, minute):
        self.hour = hour
        self = self + minute

    def __repr__(self):
        return "{0:0=2d}".format(self.hour) + ":" + "{0:0=2d}".format(self.minute)

    def __eq__(self, other):
        if self.hour == other.hour and self.minute == other.minute:
            return True
        return False

    def __add__(self, minutes):
        self.minute += minutes
        self.hour += self.minute // 60
        self.hour %= 24
        self.minute %= 60
        return self

    def __sub__(self, minutes):
        self.minute -= minutes
        self.hour -= abs(self.minute) // 60
        self.hour = self.hour - 1 if self.minute < 0 else self.hour
        self.hour %= 24
        self.minute %= 60
        return self

