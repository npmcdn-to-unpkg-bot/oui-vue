import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Wechat from './Wechat'
import Home from './Home'
import Yi from './yi'
import Icon from './pages/Icon'
import Switch from './pages/Switch'
import Radio from './pages/Radio'
import Input from './pages/Input'
import Number from './pages/Number'
import Checklist from './pages/Checklist'
import Selector from './pages/Selector'
import Tip from './pages/Tip'
import XButton from './pages/X-button'
import Textarea from './pages/Textarea'
import Flexbox from './pages/Flexbox'
import Tab from './pages/Tab'
import Swiper from './pages/Swiper'
import Sticky from './pages/Sticky'
import Picker from './pages/Picker'
import Datetime from './pages/Datetime'
import Popup from './pages/Popup'
import Range from './pages/Range'
import Actionsheet from './pages/Actionsheet'
import Clocker from './pages/Clocker'
import Rater from './pages/Rater'
import PopupPicker from './pages/Popup-picker'
import Address from './pages/Address'
import Toast from './pages/Toast'
import Loading from './pages/Loading'
import Alert from './pages/Alert'
import Confirm from './pages/Confirm'
import Progress from './pages/Progress'
import XImg from './pages/XImg'
import Onepx from './pages/1px'
import Orientation from './pages/Orientation'
import Shake from './pages/Shake'
import Cell from './pages/Cell'
import Demo from './pages/Demo'
import Emotion from './pages/Wechat-emotion'
import Search from './pages/Search'
import Donate from './pages/Donate'
import Thanks from './pages/Thanks'
import Spinner from './pages/Spinner'
import Calendar from './pages/Calendar'
import Circle from './pages/Circle'
import Countup from './pages/Countup'
import ColorPicker from './pages/Color-picker'
import Blur from './pages/Blur'
import Scroller from './pages/Scroller'
import Comment from './pages/Comment'
import Pulldown from './pages/Pulldown'
import Pullup from './pages/Pullup'
import Masker from './pages/Masker'
import Countdown from './pages/Countdown'
import XHeader from './pages/X-header'
import Inview from './pages/Inview'
import InlineCalendar from './pages/Inline-calendar'
import Checker from './pages/Checker'
import ScrollerFull from './pages/Scroller-full'
import NumberRoller from './pages/Number-roller'
import Timeline from './pages/Timeline'
import Steps from './pages/Steps'
import Tabbar from './pages/Tabbar'
import Panel from './pages/Panel'
import Reddot from './pages/Reddot'
import ButtonTab from './pages/Button-tab'
import ScrollerSwiper from './pages/Scroller-swiper'
import Qrcode from './pages/Qrcode'
import Badge from './pages/Badge'
import Close from './pages/Close'
import Dialog from './pages/Dialog'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)
Vue.config.devtools = true

const router = new Router()

router.map({
  '/': {
    component: Home
  },
  '/demo/wechat': {
    component: Wechat
  },
  '/demo/yi': {
    component: Yi
  },
  '/component/icon': {
    component: Icon
  },
  '/component/switch': {
    component: Switch
  },
  '/component/radio': {
    component: Radio
  },
  '/component/input': {
    component: Input
  },
  '/component/number': {
    component: Number
  },
  '/component/checklist': {
    component: Checklist
  },
  '/component/selector': {
    component: Selector
  },
  '/component/tip': {
    component: Tip
  },
  '/component/x-button': {
    component: XButton
  },
  '/component/textarea': {
    component: Textarea
  },
  '/component/flexbox': {
    component: Flexbox
  },
  '/component/tab': {
    component: Tab
  },
  '/component/swiper': {
    component: Swiper
  },
  '/component/sticky': {
    component: Sticky
  },
  '/component/picker': {
    component: Picker
  },
  '/component/datetime': {
    component: Datetime
  },
  '/component/popup': {
    component: Popup
  },
  '/component/range': {
    component: Range
  },
  '/component/actionsheet': {
    component: Actionsheet
  },
  '/component/clocker': {
    component: Clocker
  },
  '/component/rater': {
    component: Rater
  },
  '/component/popup-picker': {
    component: PopupPicker
  },
  '/component/address': {
    component: Address
  },
  '/component/toast': {
    component: Toast
  },
  '/component/loading': {
    component: Loading
  },
  '/component/alert': {
    component: Alert
  },
  '/component/confirm': {
    component: Confirm
  },
  '/component/progress': {
    component: Progress
  },
  '/component/x-img': {
    component: XImg
  },
  '/component/1px': {
    component: Onepx
  },
  '/component/orientation': {
    component: Orientation
  },
  '/component/shake': {
    component: Shake
  },
  '/component/cell': {
    component: Cell
  },
  '/demo': {
    component: Demo
  },
  '/component/emotion': {
    component: Emotion
  },
  '/component/search': {
    component: Search
  },
  '/project/donate': {
    component: Donate
  },
  '/project/thanks': {
    component: Thanks
  },
  '/component/spinner': {
    component: Spinner
  },
  '/component/calendar': {
    component: Calendar
  },
  '/component/circle': {
    component: Circle
  },
  '/component/countup': {
    component: Countup
  },
  '/component/color-picker': {
    component: ColorPicker
  },
  '/component/blur': {
    component: Blur
  },
  '/component/scroller': {
    component: Scroller
  },
  '/component/comment': {
    component: Comment
  },
  '/component/pulldown': {
    component: Pulldown
  },
  '/component/pullup': {
    component: Pullup
  },
  '/component/masker': {
    component: Masker
  },
  '/component/countdown': {
    component: Countdown
  },
  '/component/inview': {
    component: Inview
  },
  '/component/x-header': {
    component: XHeader
  },
  '/component/inline-calendar': {
    component: InlineCalendar
  },
  '/component/checker': {
    component: Checker
  },
  '/component/scroller/full': {
    component: ScrollerFull
  },
  '/component/number-roller': {
    component: NumberRoller
  },
  '/component/timeline': {
    component: Timeline
  },
  '/component/steps': {
    component: Steps
  },
  '/component/tabbar': {
    component: Tabbar
  },
  '/component/panel': {
    component: Panel
  },
  '/component/reddot': {
    component: Reddot
  },
  '/component/button-tab': {
    component: ButtonTab
  },
  '/component/scroller-swiper': {
    component: ScrollerSwiper
  },
  '/component/qrcode': {
    component: Qrcode
  },
  '/component/badge': {
    component: Badge
  },
  '/component/close': {
    component: Close
  },
  '/component/dialog': {
    component: Dialog
  }
})

router.on('/component/center', {
  component: require('./pages/Center')
})

// save position for demo page
let demoScrollTop = 0
function saveDemoScrollTop () {
  demoScrollTop = window.scrollY
}

router.beforeEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
  }
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (/\/demo\/component\/\w+/.test(transition.to.path)) {
      router.go({
        replace: true,
        path: transition.to.path.replace('/demo', ''),
        append: false
      })
    } else {
      transition.next()
    }
  }
})

router.afterEach(function (transition) {
  if (transition.to.path !== '/demo') {
    window.scrollTo(0, 0)
  } else {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
    // if from component page
    if (demoScrollTop && /component/.test(transition.from.path)) {
      setTimeout(function () {
        window.scrollTo(0, demoScrollTop)
      }, 100)
    }
    setTimeout(function () {
      window.addEventListener('scroll', saveDemoScrollTop, false)
    }, 1000)
  }
})

router.start(App, 'app')
