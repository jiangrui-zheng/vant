### [v3.6.0](https://github.com/vant-ui/vant/compare/v3.5.3...v3.6.0)

`2022-08-21`

**Bug Fixes**

- @vant/cli: should replace NODE_ENV in vite v3 [#10887](https://github.com/vant-ui/vant/issues/10887)
- Calendar: content disappeared when hiding [#10910](https://github.com/vant-ui/vant/issues/10910)
- Calendar: fix reading getFullYear error [#10908](https://github.com/vant-ui/vant/issues/10908)
- Calendar: reading getFullYear error in some cases [#10909](https://github.com/vant-ui/vant/issues/10909)
- Empty: generate unique id to avoid render issue [#10943](https://github.com/vant-ui/vant/issues/10943)
- incorrect tag name in WebStorm [#10946](https://github.com/vant-ui/vant/issues/10946)
- Popover: can not scroll inside popup [#10949](https://github.com/vant-ui/vant/issues/10949)
- PullRefresh: remove passive event warning [#10938](https://github.com/vant-ui/vant/issues/10938)
- Search: --van-search-input-height var not work [#10911](https://github.com/vant-ui/vant/issues/10911)

**Document**

- add import tips [#10941](https://github.com/vant-ui/vant/issues/10941)
- add tips in advanced-usage.zh-CN.md [#10927](https://github.com/vant-ui/vant/issues/10927)
- changelog: 3.5.4 [961f70](https://github.com/vant-ui/vant/commit/961f70d523b723c864d99dceb2be1a19ec506d03)
- changelog: vant@3.5.3 [#10869](https://github.com/vant-ui/vant/issues/10869)
- Form: fix the type of rule trigger option [#10912](https://github.com/vant-ui/vant/issues/10912)
- import quick start document [#10945](https://github.com/vant-ui/vant/issues/10945)
- Search: fix action-text type [#10936](https://github.com/vant-ui/vant/issues/10936)
- Search: fix action-text type [#10935](https://github.com/vant-ui/vant/issues/10935)
- Space: add version tip [#10886](https://github.com/vant-ui/vant/issues/10886)

**Feature**

- @vant/use: useClickAway support multiple targets [#10948](https://github.com/vant-ui/vant/issues/10948)
- Badge: fix the problem mentioned at README. [#10921](https://github.com/vant-ui/vant/issues/10921)
- ConfigProvider: add z-index prop [#10915](https://github.com/vant-ui/vant/issues/10915)
- Form: add validateEmpty option of rule [#10913](https://github.com/vant-ui/vant/issues/10913)
- Popup: add role and tabindex for a11y [#10894](https://github.com/vant-ui/vant/issues/10894)
- Space: add new component space [#10857](https://github.com/vant-ui/vant/issues/10857)
- touch-emulator: support .mjs extension [#10888](https://github.com/vant-ui/vant/issues/10888)

**release**

- @vant/use 1.4.2 [326880](https://github.com/vant-ui/vant/commit/326880a4e19f8ab8ffe6042a8cc968cc03b02616)
- 3.5.4 [cfdb5c](https://github.com/vant-ui/vant/commit/cfdb5c1fbe496f6a064ab8bebe7f1ae8734490c0)
### [v3.5.3](https://github.com/vant-ui/vant/compare/v3.5.2...v3.5.3)

`2022-07-31`

**Bug Fixes**

- @vant-cli: compilation error when using setup syntactic sugar and including subcomponents [cb7512](https://github.com/vant-ui/vant/commit/cb751211f1184a7a36627b45290f84c64d656f5a)
- create-vant-cli-app: missing demo registration [#10839](https://github.com/vant-ui/vant/issues/10839)
- docs: fix button example type in documentation [#10850](https://github.com/vant-ui/vant/issues/10850)
- failed to get correct height of safe area element [#10827](https://github.com/vant-ui/vant/issues/10827)
- Popover: allow to dynamically set offset prop [#10840](https://github.com/vant-ui/vant/issues/10840)
- Uploader: should not preview failed images [#10790](https://github.com/vant-ui/vant/issues/10790)

**Document**

- changelog: @vant/cli@4.0.3 [#10772](https://github.com/vant-ui/vant/issues/10772)
- changelog: vant@3.5.2 [e5a3aa](https://github.com/vant-ui/vant/commit/e5a3aa103dcd087f091d757ad244179ad4a70f42)
- improve description of name and required props [#10841](https://github.com/vant-ui/vant/issues/10841)
- update readme [#10868](https://github.com/vant-ui/vant/issues/10868)
- update website domain [#10798](https://github.com/vant-ui/vant/issues/10798)

**Feature**

- @vant/cli: bump vite 3.0 [#10842](https://github.com/vant-ui/vant/issues/10842)
- Calendar: expose getSelectedDate method [419a8e](https://github.com/vant-ui/vant/commit/419a8e4f0e6454b9aac30d5800318deabec099cb)
- cli: support site.headHtml option [#10807](https://github.com/vant-ui/vant/issues/10807)
- Collapse: collapse add toggleAll method for issues #10818 [#10818](https://github.com/vant-ui/vant/issues/10818) [#10837](https://github.com/vant-ui/vant/issues/10837) [#10818](https://github.com/vant-ui/vant/issues/10818)

**perf**

- cli: improve cli boot time [#10780](https://github.com/vant-ui/vant/issues/10780)
- cli: replace lint-staged with nano-staged [#10778](https://github.com/vant-ui/vant/issues/10778)
- cli: replace ora with nanospinner [#10779](https://github.com/vant-ui/vant/issues/10779)

**refactor**

- @vant/cli: remove vetur configs [#10866](https://github.com/vant-ui/vant/issues/10866)

**release**

- @vant/cli 4.0.3 [e4fc6f](https://github.com/vant-ui/vant/commit/e4fc6f9081728d3f59ef8d60c18bc5e7fa72d571)
- 3.5.3 [d96c42](https://github.com/vant-ui/vant/commit/d96c4228f5c16884d10dc523217194d138bf35c6)
- create-vant-cli-app 2.0.1 [c628a6](https://github.com/vant-ui/vant/commit/c628a667703b38e3999e1953950a187e97a45efb)
