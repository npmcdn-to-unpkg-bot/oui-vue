/**
 * Created by Layman (http://github.com/anysome) on 16/5/31.
 */

let OUI = {
    // components
    get Actionsheet () {
        return require('./components/actionsheet')
    },
    get Address () {
        return require('./components/address')
    },
    get Alert () {
        return require('./components/alert')
    },
    get Badge () {
        return require('./components/badge')
    },
    get Blur () {
        return require('./components/blur')
    },
    get Box () {
        return require('./components/box')
    },
    get ButtonTab () {
        let {ButtonTab} = require('./components/button-tab')
        return ButtonTab
    },
    get ButtonTabItem () {
        let  {ButtonTabItem} = require('./components/button-tab')
        return ButtonTabItem
    },
    get Calendar () {
        return require('./components/calendar')
    },
    get Cell () {
        return require('./components/cell')
    },
    get Checker () {
        return require('./components/checker')
    },
    get CheckerItem () {
        return require('./components/checker-item')
    },
    get Checklist () {
        return require('./components/checklist')
    },
    get Circle () {
        return require('./components/circle')
    },
    get Clocker () {
        return require('./components/clocker')
    },
    get ColorPicker () {
        return require('./components/color-picker')
    },
    get Confirm () {
        return require('./components/confirm')
    },
    get Countdown () {
        return require('./components/countdown')
    },
    get Countup () {
        return require('./components/countup')
    },
    get Datetime () {
        return require('./components/datetime')
    },
    get DevTip () {
        return require('./components/dev-tip')
    },
    get Dialog () {
        return require('./components/dialog')
    },
    get Divider () {
        return require('./components/divider')
    },
    get Flexbox () {
        return require('./components/flexbox')
    },
    get FlexboxItem () {
        return require('./components/flexbox-item')
    },
    get Group () {
        return require('./components/group')
    },
    get GroupTitle () {
        return require('./components/group-title')
    },
    get Icon () {
        return require('./components/icon')
    },
    get InlineCalendar () {
        return require('./components/inline-calendar')
    },
    get InlineDesc () {
        return require('./components/inline-desc')
    },
    get Loading () {
        return require('./components/loading')
    },
    get Masker () {
        return require('./components/masker')
    },
    get NumberRoller () {
        return require('./components/number-roller')
    },
    get Orientation () {
        return require('./components/orientation')
    },
    get Panel () {
        return require('./components/panel')
    },
    get Picker () {
        return require('./components/picker')
    },
    get Popup () {
        return require('./components/popup')
    },
    get PopupPicker () {
        return require('./components/popup-picker')
    },
    get Progress () {
        return require('./components/progress')
    },
    get Qrcode () {
        return require('./components/qrcode')
    },
    get Radio () {
        return require('./components/radio')
    },
    get Range () {
        return require('./components/range')
    },
    get Rater () {
        return require('./components/rater')
    },
    get Scroller () {
        return require('./components/scroller')
    },
    get Search () {
        return require('./components/search')
    },
    get Selector () {
        return require('./components/selector')
    },
    get Shake () {
        return require('./components/shake')
    },
    get Spinner () {
        return require('./components/spinner')
    },
    get Sticky () {
        return require('./components/sticky')
    },
    get Swiper () {
        return require('./components/swiper')
    },
    get SwiperItem () {
        return require('./components/swiper-item')
    },
    get Switch () {
        return require('./components/switch')
    },
    get Tab () {
        let {Tab} = require('./components/tab')
        return Tab
    },
    get TabItem () {
        let {TabItem} = require('./components/tab')
        return TabItem
    },
    get Tabbar () {
        let {Tabbar} = require('./components/tabbar')
        return Tabbar
    },
    get TabbarItem () {
        let {TabbarItem} = require('./components/tabbar')
        return TabbarItem
    },
    get Timeline () {
        let {Timeline} = require('./components/timeline')
        return Timeline
    },
    get TimelineItem () {
        let {TimelineItem} = require('./components/timeline')
        return TimelineItem
    },
    get Step () {
      let {Step} = require('./components/steps')
      return Step
    },
    get StepItem () {
      let {StepItem} = require('./components/steps')
      return StepItem
    },
    get Tip () {
        return require('./components/tip')
    },
    get Toast () {
        return require('./components/toast')
    },
    get WechatEmotion () {
        return require('./components/wechat-emotion')
    },
    get XButton () {
        return require('./components/x-button')
    },
    get XHeader () {
        return require('./components/x-header')
    },
    get XImg () {
        return require('./components/x-img')
    },
    get XInput () {
        return require('./components/x-input')
    },
    get XNumber () {
        return require('./components/x-number')
    },
    get XTextarea () {
        return require('./components/x-textarea')
    },
}

module.exports = OUI
