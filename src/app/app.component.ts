import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// import { report } from './content';
import * as pdfReport from './pdf-report';
import { CathPciReport } from './cath-pci.report';

const pdf = pdfMake;
pdf.vfs = pdfFonts.pdfMake.vfs;

pdf.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew-Bold.ttf',
    italics: 'THSarabunNew-Italic.ttf',
    bolditalics: 'THSarabunNew-BoldItalic.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  },
  OpenSans: {
    normal: 'OpenSans-Light.ttf',
    bold: 'OpenSans-Bold.ttf',
    italics: 'OpenSans-Italic.ttf',
    bolditalics: 'OpenSans-BoldItalic.ttf'
  },
  Calibri: {
    normal: 'calibri.ttf',
    bold: 'calibrib.ttf',
    italics: 'calibrii.ttf',
    bolditalics: 'calibril.ttf'
  },
  Fontello: {
    normal: 'fontello.ttf',
    bold: 'fontello.ttf',
    italics: 'fontello.ttf',
    bolditalics: 'fontello.ttf'
  },
  FontAwesome: {
    normal: 'fa-regular-400.ttf',
    bold: 'fa-solid-900.ttf',
    italics: 'fa-regular-400.ttf',
    bolditalics: 'fa-regular-400.ttf'
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdf-export';

  constructor() {}

  async exportPDF1() {
    const docDefinition: pdfMake.TDocumentDefinitions = {
      content: [
        { text: 'สวัสดีประเทศไทย reat pdf demo ', style: 'thai' },
        { ul: ['item 1', 'item 2'], type: 'square' },
        { qr: 'Hello! world' },
        { text: [{ text: '', style: 'icon' }, ' icon-check'] },
        { text: [{ text: '', style: 'icon' }, ' icon-check-empty'] },
        { text: [{ text: '', style: 'icon' }, ' icon-circle-empty'] },
        { text: [{ text: '', style: 'icon' }, ' icon-dot-circled'] },
        { text: [{ text: '', style: 'symbol' }, ' fa-check-square'] },
        { text: [{ text: '', style: 'symbol' }, ' fa-square'] },
        { text: [{ text: '', style: 'symbol' }, ' fa-dot-circle'] },
        { text: [{ text: '', style: 'symbol' }, ' fa-check-circle'] },
        { text: [{ text: '', style: 'symbol' }, ' fa-circle'] },
        { text: [{ text: '', style: 'symbol', bold: true }, ' fa-arrow-right'] },
        { image: await pdfReport.imageToBase64('assets/img/googlelogo.png') },
        { image: await pdfReport.imageToBase64('assets/img/bangkok-hospital-resize.png') },
        { image: await pdfReport.imageToBase64('assets/img/bangkok-hospital.png'), height: 100 },
        {
          text: 'This is a header, using header style',
          style: 'header'
        },
        // tslint:disable: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        {
          text: 'Subheader 1 - using subheader style',
          style: 'subheader'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
          text: 'Subheader 2 - using subheader style',
          style: 'subheader'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
          text:
            'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
          style: ['quote', 'small']
        }
        // tslint:enable: max-line-length
      ],
      styles: {
        icon: {
          font: 'Fontello'
        },
        symbol: {
          font: 'FontAwesome'
        },
        symbol2: {
          font: 'FontAwesome',
          bold: true
        },
        thai: {
          font: 'THSarabunNew',
          fontSize: 15
        },
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      },
      // defaultStyle: {
      //   font: 'THSarabunNew'
      // },
      pageOrientation: pdfMake.PageOrientation.PORTRAIT,
      pageSize: pdfMake.PageSize.A4
    };
    pdfMake.createPdf(docDefinition).open();
  }

  async exportPDF2() {
    const data = require('./data.json');
    console.log(data[0]);

    const report = new CathPciReport(data[0]);
    // const report = new CathPciReport(null);
    pdfMake.createPdf(await report.getDocDefinition()).open();
    // pdfMake.createPdf(await report.getDoc()).open();
  }
}
