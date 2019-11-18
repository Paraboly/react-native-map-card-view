<img alt="React Native Map Card View" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/Paraboly/react-native-map-card-view)

[![Map based list card view for React Native via Paraboly.](https://img.shields.io/badge/-Map%20based%20list%20card%20view%20for%20React%20Native%20via%20Paraboly.-lightgrey?style=for-the-badge)](https://github.com/Paraboly/react-native-map-card-view)

[![npm version](https://img.shields.io/npm/v/@paraboly/react-native-map-card-view.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-map-card-view)
[![npm](https://img.shields.io/npm/dt/@paraboly/react-native-map-card-view.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-map-card-view)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Map Card View"
        src="assets/Screenshots/example.png" />
</p>

# Installation

Add the dependency:

```ruby
npm i @paraboly/react-native-map-card-view
```

## Peer Dependencies

###### IMPORTANT! You need install them

```js
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-maps": ">= 0.26.1",
"react-native-androw": ">= 0.0.34",
"@freakycoder/react-native-helpers": "^0.1.0"
```

# Usage

## Import

```jsx
import MapCardView from "@paraboly/react-native-map-card-view";
```

## Usage (IMPORTANT! READ IT BEFORE USE)

To fill the list data. You **HAVE TO** use this format:

```json
[
  {
    "name": "Azamat Zhanisov",
    "source": "https://images.unsplash.com/photo-1566807810030-3eaa60f3e670?ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80"
  },
  {
    "name": "Ayo Ogunseinde",
    "source": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80"
  }
]
```

```jsx
<MapCardView data={data} title="Testimonial" />
```

# Configuration - Props

    borderLeftWidth

| Property        |      Type      |          Default          | Description                                                                       |
| --------------- | :------------: | :-----------------------: | --------------------------------------------------------------------------------- |
| width           | number, string |    ScreenWidth \* 0.9     | change the width of the card view                                                 |
| height          | number, string |            150            | change the height of the card view                                                |
| title           |     string     |        Testimonial        | change the title                                                                  |
| data            |     array      | dummyData(check the code) | set your own data array however you **HAVE TO** fill the array with above format! |
| markers         |    <Marker>    |      default marker       | set your own Marker JSX Object                                                    |
| styles          |     style      |          default          | change the container's style                                                      |
| mapStyle        |     style      |          default          | change the map's style                                                            |
| titleStyle      |     style      |          default          | change the title's style                                                          |
| shadowStyle     |     style      |          default          | change the shadow's style                                                         |
| shadowColor     |     string     |           #ccc            | change the shadow color                                                           |
| borderColor     |     string     |          #f54242          | change the border color                                                           |
| backgroundColor |     string     |           #fff            | change the background color                                                       |
| borderLeftWidth |     number     |             5             | change the left sided border width                                                |

## Future Plans

- [x] ~~LICENSE~~

## Author

FreakyCoder, kurayogun@gmail.com | kuray.ogun@paraboly.com

## License

React Native Map Card View is available under the MIT license. See the LICENSE file for more info.