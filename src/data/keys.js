export const KEY_ACTIONS = [
  {value: 'normal', display: 'Normal', tooltip: 'A normal keypress.'},
  {value: 'momentary', display: 'Momentary', tooltip: 'While held keys on the matching layer are active.'},
  {value: 'toggle', display: 'Toggle', tooltip: 'Pressing activates the matching layer. Pressing again deactivates it.'},
  {value: 'tapkey', display: 'Tap Key', tooltip: 'Key sends one code when pressed and another when held.'},
  {value: 'modkey', display: 'Mod Key', tooltip: 'Combines a primary key with a secondary as if both keys were pressed together.'},
  {value: 'combokey', display: 'Combo Key', tooltip: 'Combines multiple modifiers with a key.'},
  {value: 'direct', display: 'To Layer', tooltip: 'Goes to a layer. This code is special, because it lets you go either up or down the stack -- just goes directly to the layer you want.'},
  {value: 'taptoggle', display: 'Layer Tap Toggle', tooltip: 'If you hold the key down, the layer becomes active, and then deactivates when you let go. And if you tap it, the layer simply becomes active (toggles on).'},
  {value: 'setdefaultlayer', display: 'Set Default Layer', tooltip: 'Temporarily sets the default layer.'}
]

export const KEYS = [
  {
    label: 'Alphanumerals',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'A', display: 'A'},
      {value: 'B', display: 'B'},
      {value: 'C', display: 'C'},
      {value: 'D', display: 'D'},
      {value: 'E', display: 'E'},
      {value: 'F', display: 'F'},
      {value: 'G', display: 'G'},
      {value: 'H', display: 'H'},
      {value: 'I', display: 'I'},
      {value: 'J', display: 'J'},
      {value: 'K', display: 'K'},
      {value: 'L', display: 'L'},
      {value: 'M', display: 'M'},
      {value: 'N', display: 'N'},
      {value: 'O', display: 'O'},
      {value: 'P', display: 'P'},
      {value: 'Q', display: 'Q'},
      {value: 'R', display: 'R'},
      {value: 'S', display: 'S'},
      {value: 'T', display: 'T'},
      {value: 'U', display: 'U'},
      {value: 'V', display: 'V'},
      {value: 'W', display: 'W'},
      {value: 'X', display: 'X'},
      {value: 'Y', display: 'Y'},
      {value: 'Z', display: 'Z'}
    ]
  },
  {
    label: ' ',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: '1', display: '1'},
      {value: '2', display: '2'},
      {value: '3', display: '3'},
      {value: '4', display: '4'},
      {value: '5', display: '5'},
      {value: '6', display: '6'},
      {value: '7', display: '7'},
      {value: '8', display: '8'},
      {value: '9', display: '9'},
      {value: '0', display: '0'}
    ]
  },
  {
    label: ' ',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'BSLS', display: '\\', tooltip: 'Back Slash'},
      {value: 'QUOT', display: '\'', tooltip: 'Quote'},
      {value: 'MINS', display: '-', tooltip: 'Hyphen'},
      {value: 'EQL', display: '=', tooltip: 'Equal'},
      {value: 'LBRC', display: '[', tooltip: 'Left Bracket'},
      {value: 'RBRC', display: ']', tooltip: 'Right Bracket'},
      {value: 'COMM', display: ',', tooltip: 'Comma'},
      {value: 'DOT', display: '.', tooltip: 'Period'},
      {value: 'SLSH', display: '/', tooltip: 'Forward Slash'},
      {value: 'GRV', display: '`', tooltip: 'Grave Accent'},
      {value: 'SCLN', display: ';', tooltip: 'Semicolon'}
    ]
  },
  {
    label: ' ',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'ENT', display: '↵', tooltip: 'Enter'},
      {value: 'ESC', display: '⎋', tooltip: 'Escape'},
      {value: 'BSPC', display: '⌫', tooltip: 'Backspace'},
      {value: 'TAB', display: '↹', tooltip: 'Tab'},
      {value: 'SPC', display: '___', tooltip: 'Space'},
      {value: 'CAPS', display: '⇪', tooltip: 'Caps Lock'},
      {value: 'PSCR', display: '⎙', tooltip: 'Print Screen'},
      {value: 'SLCK', display: 'ScrLk', tooltip: 'Scroll Lock'},
      {value: 'PAUS', display: 'Break', tooltip: 'Pause/Break'},
      {value: 'INS', display: '⎀', tooltip: 'Insert'},
      {value: 'DEL', display: '⌦', tooltip: 'Delete'},
      {value: 'HOME', display: '⇱', tooltip: 'Home'},
      {value: 'END', display: '⇲', tooltip: 'End'},
      {value: 'PGUP', display: '⇞', tooltip: 'Page Up'},
      {value: 'PGDN', display: '⇟', tooltip: 'Page Down'},
      {value: 'DOWN', display: '↓'},
      {value: 'UP', display: '↑'},
      {value: 'LEFT', display: '←'},
      {value: 'RIGHT', display: '→'},
      {value: 'NUHS', display: '#', tooltip: 'ISO Hash'},
      {value: 'NUBS', display: '|', tooltip: 'ISO Back Slash'},
      {value: 'INT1', display: 'RO', tooltip: 'JIS \\ and |'},
      {value: 'INT2', display: 'KANA', tooltip: 'JIS Katakana/Hiragana'},
      {value: 'INT3', display: 'JYEN', tooltip: 'JIS ¥'},
      {value: 'INT4', display: 'HENK', tooltip: 'JIS Henkan'},
      {value: 'INT5', display: 'MHEN', tooltip: 'JIS Muhenkan'}
    ]
  },
  {
    label: 'Function',
    icon: '',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'F1', display: 'F1'},
      {value: 'F2', display: 'F2'},
      {value: 'F3', display: 'F3'},
      {value: 'F4', display: 'F4'},
      {value: 'F5', display: 'F5'},
      {value: 'F6', display: 'F6'},
      {value: 'F7', display: 'F7'},
      {value: 'F8', display: 'F8'},
      {value: 'F9', display: 'F9'},
      {value: 'F10', display: 'F10'},
      {value: 'F11', display: 'F11'},
      {value: 'F12', display: 'F12'},
      {value: 'F13', display: 'F13'},
      {value: 'F14', display: 'F14'},
      {value: 'F15', display: 'F15'},
      {value: 'F16', display: 'F16'},
      {value: 'F17', display: 'F17'},
      {value: 'F18', display: 'F18'},
      {value: 'F19', display: 'F19'},
      {value: 'F20', display: 'F20'},
      {value: 'F21', display: 'F21'},
      {value: 'F22', display: 'F22'},
      {value: 'F23', display: 'F23'},
      {value: 'F24', display: 'F24'}
    ]
  },
  {
    label: 'Shifted Characters',
    updateType: 'primary',
    visible: ['normal', 'tapkey'],
    keys: [
      {value: 'TILD', display: '~'},
      {value: 'EXLM', display: '!'},
      {value: 'AT', display: '@'},
      {value: 'HASH', display: '#'},
      {value: 'DLR', display: '$'},
      {value: 'PERC', display: '%'},
      {value: 'CIRC', display: '^'},
      {value: 'AMPR', display: '&'},
      {value: 'ASTR', display: '*'},
      {value: 'LPRN', display: '('},
      {value: 'RPRN', display: ')'},
      {value: 'UNDS', display: '_'},
      {value: 'PLUS', display: '+'},
      {value: 'LCBR', display: '{'},
      {value: 'RCBR', display: '}'},
      {value: 'LT', display: '<'},
      {value: 'GT', display: '>'},
      {value: 'COLN', display: ':'},
      {value: 'DQT', display: '"'},
      {value: 'PIPE', display: '|'},
      {value: 'QUES', display: '?'},
    ]
  },
  {
    label: 'Keypad',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'modkey', 'combokey'],
    keys: [
      {value: 'NLCK', display: '!!lock'},
      {value: 'PSLS', display: '\\'},
      {value: 'PAST', display: '*'},
      {value: 'PMNS', display: '-'},
      {value: 'PPLS', display: '+'},
      {value: 'PENT', display: '↵'},
      {value: 'PDOT', display: '.'},
      {value: 'PEQL', display: '='},
      {value: 'P0', display: '0'},
      {value: 'P1', display: '1'},
      {value: 'P2', display: '2'},
      {value: 'P3', display: '3'},
      {value: 'P4', display: '4'},
      {value: 'P5', display: '5'},
      {value: 'P6', display: '6'},
      {value: 'P7', display: '7'},
      {value: 'P8', display: '8'},
      {value: 'P9', display: '9'}
    ]
  },
  {
    label: 'Modifiers',
    updateType: {
      'normal': 'primary',
      'tapkey': 'secondary',
      'modkey': 'secondary',
    },
    visible: ['normal', 'tapkey', 'modkey'],
    keys: [
      {value: 'LCTL', display: 'L⌃', tooltip: 'Left Control'},
      {value: 'RCTL', display: 'R⌃', tooltip: 'Right Control'},
      {value: 'LALT', display: 'L⎇', tooltip: 'Left Alt'},
      {value: 'RALT', display: 'R⎇', tooltip: 'Right Alt'},
      {value: 'LGUI', display: 'L⌘'},
      {value: 'RGUI', display: 'R⌘'},
      {value: 'LSFT', display: 'L⇧'},
      {value: 'RSFT', display: 'R⇧'},
      {value: 'APP', display: '▤'},
      {value: 'HYPR', display: 'HYPER', tooltip: 'Hold Left Control, Shift, Alt and GUI'},
      {value: 'MEH', display: 'MEH', tooltip: 'Hold Left Control, Shift and Alt'}
    ]
  },
  {
    label: 'Media',
    updateType: 'primary',
    visible: ['normal', 'tapkey', 'combokey'],
    keys: [
      {value: 'MSTP', display: '!!stop'},
      {value: 'MPLY', display: '!!play'},
      {value: 'MPRV', display: '!!fast backward'},
      {value: 'MNXT', display: '!!fast forward'},
      {value: 'MUTE', display: '!!volume off'},
      {value: 'VOLD', display: '!!volume down'},
      {value: 'VOLU', display: '!!volume up'}
    ]
  },
  {
    label: 'Keyboard',
    updateType: 'primary',
    visible: ['normal'],
    keys: [
      {value: 'TRNS', display: 'Trns'},
      {value: 'BL_STEP', display: 'Toggle Led'},
      {value: 'BL_INC', display: 'LED +', tooltip: 'Increase LED Brightness'},
      {value: 'BL_DEC', display: 'LED -', tooltip: 'Decrease LED Brightness'},
      {value: 'RESET', display: 'Reset'},
      {value: 'NO', display: 'No Action'}
    ]
  },
  {
    label: 'Default Layer',
    updateType: {
      'direct': 'primary',
      'setdefaultlayer': 'primary'
    },
    visible: ['direct', 'setdefaultlayer'],
    keys: [
      {value: 'L0', display: 'L0'}
    ]
  },
  {
    label: 'Layers',
    updateType: {
      'momentary': 'primary',
      'toggle': 'primary',
      'tapkey': 'secondary',
      'direct': 'primary',
      'taptoggle': 'primary',
      'setdefaultlayer': 'primary'
    },
    visible: ['momentary', 'toggle', 'tapkey', 'direct', 'taptoggle', 'setdefaultlayer'],
    keys: [
      {value: 'L1', display: 'L1'},
      {value: 'L2', display: 'L2'},
      {value: 'L3', display: 'L3'},
      {value: 'L4', display: 'L4'},
      {value: 'L5', display: 'L5'},
      {value: 'L6', display: 'L6'},
      {value: 'L7', display: 'L7'},
      {value: 'L8', display: 'L8'},
      {value: 'L9', display: 'L9'},
      {value: 'L10', display: 'L10'},
      {value: 'L11', display: 'L11'},
      {value: 'L12', display: 'L12'},
      {value: 'L13', display: 'L13'},
      {value: 'L14', display: 'L14'},
      {value: 'L15', display: 'L15'}
    ]
  },
  {
    label: 'Combo Keys',
    updateType: 'secondary',
    visible: ['combokey'],
    keys: [
      {value: 'HYPR', display: 'Hyper'},
      {value: 'MEH', display: 'Meh'},
      {value: 'LCAG', display: 'Lcag'},
      {value: 'ALTG', display: 'Altg'},
      {value: 'SCMD', display: 'Scmd'},
      {value: 'LCA', display: 'Lca'}
    ]
  },
  {
    label: 'Combo Tap Keys',
    updateType: 'secondary',
    visible: ['tapkey'],
    keys: [
      {value: 'C_S', display: 'C_S'},
      {value: 'MEH', display: 'Meh'},
      {value: 'LCAG', display: 'Lcag'},
      {value: 'RCAG', display: 'Rcag'},
      {value: 'ALL', display: 'All'},
      {value: 'SCMD', display: 'Scmd'},
      {value: 'LCA', display: 'Lca'}
    ]
  }
];

export const KEY_DISPLAY_MAP = {
  'BSPC': '⌫',
  'DEL': '⌦',
  'TAB': '↹',
  'ESC': '⎋',
  'ENT': '↵',
  'LSFT': '⇧',
  'RSFT': '⇧',
  'CAPS': '⇪',
  'UP': '↑',
  'DOWN': '↓',
  'LEFT': '←',
  'RIGHT': '→',
  'LALT': '⎇',
  'RALT': '⎇',
  'LCTL': '⌃',
  'RCTL': '⌃',
  'LGUI': '⌘',
  'RGUI': '⌘',
  'APP': '▤',
  'SPC': '!!space shuttle',
  'SCLN': ';',
  'QUOT': '\'',
  'LBRC': '[',
  'RBRC': ']',
  'MINS': '-',
  'EQL': '=',
  'BSLS': '\\',
  'COMM': ',',
  'DOT': '.',
  'SLSH': '/',
  'BL_TOGG': '!!lightbulb',
  'BL_STEP': '!!lightbulb outline',
  'NO': '!!ban',
  'RESET': '!!repeat',
  'NUM': '!!lock',
  'GRV': '`',
  'NUHS': '#',
  'NUBS': '\\',
  'TILD': '~',
  'EXLM': '!',
  'AT': '@',
  'HASH': '#',
  'DLR': '$',
  'PERC': '%',
  'CIRC': '^',
  'AMPR': '&',
  'ASTR': '*',
  'LPRN': '(',
  'RPRN': ')',
  'UNDS': '_',
  'PLUS': '+',
  'LCBR': '{',
  'RCBR': '}',
  'LT': '<',
  'GT': '>',
  'COLN': ':',
  'DQT': '"',
  'PIPE': '|',
  'QUES': '?',
  '1SFT': '!',
  '2SFT': '@',
  '3SFT': '#',
  '4SFT': '$',
  '5SFT': '%',
  '6SFT': '^',
  '7SFT': '&',
  '8SFT': '*',
  '9SFT': '(',
  '0SFT': ')',
  'MSTP': '!!stop',
  'MPLY': '!!play',
  'MPRV': '!!fast backward',
  'MNXT': '!!fast forward',
  'MUTE': '!!volume off',
  'VOLD': '!!volume down',
  'VOLU': '!!volume up'
};

export const KEYBOARD_INPUT_MAP = {
  800: 'BSPC',
  900: 'TAB',
  1300: 'ENT',
  1610: 'LSFT',
  1620: 'RSFT',
  1710: 'LCTL',
  1720: 'RCTL',
  1810: 'LALT',
  1820: 'RALT',
  1900: 'PAUS',
  2000: 'CAPS',
  2700: 'ESC',
  3200: 'SPC',
  3300: 'PGUP',
  3400: 'PGDN',
  3500: 'END',
  3600: 'HOME',
  3700: 'LEFT',
  3800: 'UP',
  3900: 'RIGHT',
  4000: 'DOWN',
  4500: 'INS',
  4600: 'DEL',
  4800: '0',
  4900: '1',
  5000: '2',
  5100: '3',
  5200: '4',
  5300: '5',
  5400: '6',
  5500: '7',
  5600: '8',
  5700: '9',
  6500: 'A',
  6600: 'B',
  6700: 'C',
  6800: 'D',
  6900: 'E',
  7000: 'F',
  7100: 'G',
  7200: 'H',
  7300: 'I',
  7400: 'J',
  7500: 'K',
  7600: 'L',
  7700: 'M',
  7800: 'N',
  7900: 'O',
  8000: 'P',
  8100: 'Q',
  8200: 'R',
  8300: 'S',
  8400: 'T',
  8500: 'U',
  8600: 'V',
  8700: 'W',
  8800: 'X',
  8900: 'Y',
  9000: 'Z',
  9110: 'LGUI',
  9220: 'RGUI',
  9320: 'RGUI',
  9600: 'P0',
  9700: 'P1',
  9800: 'P2',
  9900: 'P3',
  10000: 'P4',
  10100: 'P5',
  10200: 'P6',
  10300: 'P7',
  10400: 'P8',
  10500: 'P9',
  10600: 'PAST',
  10700: 'PPLS',
  10900: 'PMNS',
  11000: 'PDOT',
  11100: 'PSLS',
  11200: 'F1',
  11300: 'F2',
  11400: 'F3',
  11500: 'F4',
  11600: 'F5',
  11700: 'F6',
  11800: 'F7',
  11900: 'F8',
  12000: 'F9',
  12100: 'F10',
  12200: 'F11',
  12300: 'F12',
  14400: 'NLCK',
  14500: 'SLCK',
  18600: 'SCLN',
  18700: 'EQL',
  18800: 'COMM',
  18900: 'MINS',
  19000: 'DOT',
  19100: 'SLSH',
  19200: 'GRV',
  21900: 'LBRC',
  22000: 'BSLS',
  22100: 'RBRC',
  22200: 'QUOT',
  19201: 'TILD',
  4901: 'EXLM',
  5001: 'AT',
  5101: 'HASH',
  5201: 'DLR',
  5301: 'PERC',
  5401: 'CIRC',
  5501: 'AMPR',
  5601: 'ASTR',
  5701: 'LPRN',
  4801: 'RPRN',
  18901: 'UNDS',
  18701: 'PLUS',
  21901: 'LCBR',
  22101: 'RCBR',
  18801: 'LT',
  19001: 'GT',
  18601: 'COLN',
  22201: 'DQT',
  22001: 'PIPE',
  19101: 'QUES'
}
