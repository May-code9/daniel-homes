<template>
  <div class="inline-block">
    {{ getDay ? getDay : 'Day' }} {{ months[getMonthName] ? months[getMonthName].short : 'Month' }}
    {{ getYear ? getYear : 'Year' }} <span v-if="time"> at {{ getTime ? getTime : 'Time' }}</span>
  </div>
</template>

<script>
export default {
  props: {
    created_at: [String, Number],
    time: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      months: [
        {
          full: 'January',
          short: 'Jan',
          days: 31
        },
        {
          full: 'Febuary',
          short: 'Feb',
          days: 29
        },
        {
          full: 'March',
          short: 'March',
          days: 31
        },
        {
          full: 'April',
          short: 'April',
          days: 30
        },
        {
          full: 'May',
          short: 'May',
          days: 31
        },
        {
          full: 'June',
          short: 'Jun',
          days: 30
        },
        {
          full: 'July',
          short: 'Jul',
          days: 31
        },
        {
          full: 'August',
          short: 'Aug',
          days: 31
        },
        {
          full: 'September',
          short: 'Sept',
          days: 30
        },
        {
          full: 'October',
          short: 'Oct',
          days: 31
        },
        {
          full: 'November',
          short: 'Nov',
          days: 30
        },
        {
          full: 'December',
          short: 'Dec',
          days: 31
        }
      ],
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  },
  computed: {
    getDay() {
      var today = new Date(this.created_at)
      var day = today.getDate()

      if (day == 1 || day == 21 || day == 31) {
        var end = 'st'
      } else if (day == 2 || day == 22) {
        end = 'nd'
      } else if (day == 3 || day == 23) {
        end = 'rd'
      } else {
        end = 'th'
      }
      return day + end
    },
    getDayName() {
      var today = new Date(this.created_at)
      var dayNumber = today.getDay()
      return dayNumber
    },
    getMonthName() {
      var today = new Date(this.created_at)
      var month = today.getMonth()
      return month
    },
    getYear() {
      var today = new Date(this.created_at)
      var year = today.getFullYear()
      return year
    },
    getTime() {
      var today = new Date(this.created_at)
      var hours = today.getHours()
      if (hours >= 12) {
        var period = 'PM'
      } else if (hours < 12) {
        period = 'AM'
      }

      if (hours > 12) {
        hours = hours - 12
      }

      var minutes = today.getMinutes()
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      return hours + ':' + minutes + ' ' + period
    }
  }
}
</script>

<style></style>
