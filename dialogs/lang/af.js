/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'af', {
	title: 'Toeganglikheid instruksies',
	contents: 'Hulp inhoud. Druk ESC om toe te maak.',
	legend: [
		{
		name: 'Algemeen',
		items: [
			{
			name: 'Bewerker balk',
			legend: 'Druk ${toolbarFocus} om op die werkbalk te land. Beweeg na die volgende en voorige wekrbalkgroep met TAB and SHIFT+TAB. Beweeg na die volgende en voorige werkbalkknop met die regter of linker pyl. Druk SPASIE of ENTER om die knop te bevestig.'
		},

			{
			name: 'Bewerker dialoog',
			legend:
				'Inside a dialog, press TAB to navigate to the next dialog element, press SHIFT+TAB to move to the previous dialog element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, the tab list can be reached either with ALT+F10 or with TAB as part of the dialog tabbing order. With tab list focused, move to the next and previous tab with RIGHT and LEFT ARROW, respectively. Press ESC to discard changes and close the dialog. The focus will be moved back to the editing area upon leaving the dialog.'  // MISSING
		},

			{
			name: 'Bewerkerinhoudmenu',
			legend: 'Press ${contextMenu} or APPLICATION KEY to open context-menu. Then move to next menu option with TAB or DOWN ARROW. Move to previous option with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the menu option. Open sub-menu of current option with SPACE or ENTER or RIGHT ARROW. Go back to parent menu item with ESC or LEFT ARROW. Close context menu with ESC.' // MISSING
		},

			{
			name: 'Editor List Box', // MISSING
			legend: 'Inside a list-box, move to next list item with TAB OR DOWN ARROW. Move to previous list item with SHIFT+TAB or UP ARROW. Press SPACE or ENTER to select the list option. Press ESC to close the list-box.' // MISSING
		},

			{
			name: 'Editor Element Path Bar', // MISSING
			legend: 'Press ${elementsPathFocus} to navigate to the elements path bar. Move to next element button with TAB or RIGHT ARROW. Move to previous button with SHIFT+TAB or LEFT ARROW. Press SPACE or ENTER to select the element in editor.' // MISSING
		}
		]
	},
		{
		name: 'Commands', // MISSING
		items: [
			{
			name: ' Undo command', // MISSING
			legend: 'Press ${undo}' // MISSING
		},
			{
			name: ' Redo command', // MISSING
			legend: 'Press ${redo}' // MISSING
		},
			{
			name: ' Bold command', // MISSING
			legend: 'Press ${bold}' // MISSING
		},
			{
			name: ' Italic command', // MISSING
			legend: 'Press ${italic}' // MISSING
		},
			{
			name: ' Underline command', // MISSING
			legend: 'Press ${underline}' // MISSING
		},
			{
			name: ' Link command', // MISSING
			legend: 'Press ${link}' // MISSING
		},
			{
			name: ' Toolbar Collapse command', // MISSING
			legend: 'Press ${toolbarCollapse}' // MISSING
		},
			{
			name: ' Access previous focus space command', // MISSING
			legend: 'Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: ' Access next focus space command', // MISSING
			legend: 'Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: ' Accessibility Help', // MISSING
			legend: 'Press ${a11yHelp}' // MISSING
		},
			{
			name: ' Paste as plain text', // MISSING
			legend: 'Press ${pastetext}', // MISSING
			legendEdge: 'Press ${pastetext}, followed by ${paste}' // MISSING
		}
		]
	}
	],
	tab: 'Tab', // MISSING
	pause: 'Pouse',
	capslock: 'Hoofletterslot',
	escape: 'Ontsnap',
	pageUp: 'Blaaiop',
	pageDown: 'Blaaiaf',
	leftArrow: 'Linkspyl',
	upArrow: 'Oppyl',
	rightArrow: 'Regterpyl',
	downArrow: 'Afpyl',
	insert: 'Toevoeg',
	leftWindowKey: 'Left Windows key', // MISSING
	rightWindowKey: 'Right Windows key', // MISSING
	selectKey: 'Select key', // MISSING
	numpad0: 'Nommerblok 0',
	numpad1: 'Nommerblok 1',
	numpad2: 'Nommerblok 2',
	numpad3: 'Nommerblok 3',
	numpad4: 'Nommerblok 4',
	numpad5: 'Nommerblok 5',
	numpad6: 'Nommerblok 6',
	numpad7: 'Nommerblok 7',
	numpad8: 'Nommerblok 8',
	numpad9: 'Nommerblok 9',
	multiply: 'Maal',
	add: 'Plus',
	subtract: 'Minus',
	decimalPoint: 'Desimaalepunt',
	divide: 'Gedeeldeur',
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: 'F6',
	f7: 'F7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Nommervergrendel',
	scrollLock: 'Rolvergrendel',
	semiColon: 'Kommapunt',
	equalSign: 'Isgelykaan',
	comma: 'Komma',
	dash: 'Koppelteken',
	period: 'Punt',
	forwardSlash: 'Skuinsstreep',
	graveAccent: 'Aksentteken',
	openBracket: 'Oopblokhakkie',
	backSlash: 'Trustreep',
	closeBracket: 'Toeblokhakkie',
	singleQuote: 'Enkelaanhaalingsteken'
} );
