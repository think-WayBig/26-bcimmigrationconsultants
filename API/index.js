let express = require('express');
let app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());

let PORT = 5000;
app.listen(PORT, () => { console.log('API Running Successfully', `http://localhost:${PORT}`) });

const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

app.post('/sendUserMail', async (req, res) => {
  const msg = {
    to: req.body.mail,
    from: {
      name: 'BC Immigration Consultants',
      email: 'info@bcimmigrationconsultants.com'
    },
    subject: 'Thank you for contacting BC Immigration! You are one step ahead.',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
         <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>New email template 2024-05-03</title><!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if !mso]><!-- -->
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"><!--<![endif]-->
          <style type="text/css">
        #outlook a {
            padding:0;
        }
        .es-button {
            mso-style-priority:100!important;
            text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
            color:inherit!important;
            text-decoration:none!important;
            font-size:inherit!important;
            font-family:inherit!important;
            font-weight:inherit!important;
            line-height:inherit!important;
        }
        .es-desk-hidden {
            display:none;
            float:left;
            overflow:hidden;
            width:0;
            max-height:0;
            line-height:0;
            mso-hide:all;
        }
        @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:40px!important; text-align:center!important } h2 { font-size:32px!important; text-align:center!important } h3 { font-size:24px!important; text-align:center!important } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:40px!important; text-align:center!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:32px!important; text-align:center!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:24px!important; text-align:center!important } .es-menu td a { font-size:12px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:16px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } }
        @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
        </style>
         </head>
         <body bis_status="ok" style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
          <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#EFF7F6"><!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#eff7f6"></v:fill>
                    </v:background>
                <![endif]-->
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EFF7F6">
             <tr>
              <td valign="top" style="padding:0;Margin:0">
               <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                     <tr>
                      <td class="es-m-p0b" align="left" style="padding:20px;Margin:0"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:281px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr>
                          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:261px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#222222;font-size:14px"><img src="https://ehnunlc.stripocdn.email/content/guids/videoImgGuid/images/business_logoremovebgpreview.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="45" title="Logo"></a></td>
                             </tr>
                           </table></td>
                          <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:128px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                         <tr class="es-mobile-hidden">
                          <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:128px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:10px"><!--[if mso]><a href="https://www.bcimmigrationconsultants.com/preview/contact/" target="_blank" hidden>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://www.bcimmigrationconsultants.com/preview/contact/" 
                        style="height:39px; v-text-anchor:middle; width:118px" arcsize="13%" stroke="f"  fillcolor="#0b5394">
                <w:anchorlock></w:anchorlock>
                <center style='color:#ffffff; font-family:Raleway, Arial, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Contact</center>
            </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#386641;background:#0b5394;border-width:1px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href="https://www.bcimmigrationconsultants.com/preview/contact/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#0b5394;border-radius:5px;font-family:Raleway, Arial, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 30px 10px 30px;mso-padding-alt:0;mso-border-alt:10px solid #0b5394">Contact</a></span><!--<![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:131px" valign="top"><![endif]-->
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                         <tr class="es-mobile-hidden">
                          <td align="left" style="padding:0;Margin:0;width:131px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:10px"><!--[if mso]><a href="https://www.bcimmigrationconsultants.com/preview/blog/" target="_blank" hidden>
            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://www.bcimmigrationconsultants.com/preview/blog/" 
                        style="height:39px; v-text-anchor:middle; width:117px" arcsize="13%" stroke="f"  fillcolor="#0b5394">
                <w:anchorlock></w:anchorlock>
                <center style='color:#ffffff; font-family:Raleway, Arial, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>More</center>
            </v:roundrect></a>
        <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#386641;background:#0b5394;border-width:1px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href="https://www.bcimmigrationconsultants.com/preview/blog/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#0b5394;border-radius:5px;font-family:Raleway, Arial, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 30px 10px 30px;mso-padding-alt:0;mso-border-alt:10px solid #0b5394">More</a></span><!--<![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none">
                     <tr>
                      <td align="left" style="padding:0;Margin:0">
                       <table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:600px">
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;position:relative"><img class="adapt-img" src="https://ehnunlc.stripocdn.email/content/guids/bannerImgGuid/images/image17146884978364479.png" alt title width="100%" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="left" bgcolor="#0b5394" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-color:#0b5394">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="left" class="es-m-txt-c" style="padding:10px;Margin:0"><h3 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:Raleway, Arial, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#ffffff">Hello ${req.body.name},</h3></td>
                             </tr>
                             <tr>
                              <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:24px;color:#ffffff;font-size:16px">It is great to see you taking steps towards your goal. Here at BC Immigration, we make sure that every customer gets proper guidance and step by step procedural help. Your queries will be resolved by one of our best consultants!</p></td>
                             </tr>
                             <tr>
                              <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:30px"><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#ffffff;background:#ffffff;border-width:1px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a href="https://viewstripo.email" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#386641;font-size:16px;display:inline-block;background:#ffffff;border-radius:5px;font-family:Raleway, Arial, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 30px 10px 30px;mso-padding-alt:0;mso-border-alt:10px solid #ffffff">Call Now</a></span><!--<![endif]--></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0">
                               <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td style="padding:0;Margin:0;border-bottom:5px dotted #a7c957;background:unset;height:1px;width:100%;margin:0px"></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                 <tr>
                  <td align="center" style="padding:0;Margin:0">
                   <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0">
                               <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td style="padding:0;Margin:0;border-bottom:2px solid #eff7f6;background:unset;height:1px;width:100%;margin:0px"></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px">
                       <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;width:560px">
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:20px;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#6A994E;font-size:12px"><img src="https://ehnunlc.stripocdn.email/content/guids/videoImgGuid/images/business_logoremovebgpreview.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" title="Logo" height="50"></a></td>
                             </tr>
                             <tr>
                              <td style="padding:0;Margin:0">
                               <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr class="links">
                                  <td align="center" valign="top" width="33.33%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:tahoma, verdana, segoe, sans-serif;color:#990000;font-size:14px">Visa Support</a></td>
                                  <td align="center" valign="top" width="33.33%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:tahoma, verdana, segoe, sans-serif;color:#990000;font-size:14px">What we offer</a></td>
                                  <td align="center" valign="top" width="33.33%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0"><a target="_blank" href="" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:tahoma, verdana, segoe, sans-serif;color:#990000;font-size:14px">Why BC Immigration</a></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;font-size:0">
                               <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                 <tr>
                                  <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#6A994E;font-size:12px"><img src="https://ehnunlc.stripocdn.email/content/assets/img/social-icons/logo-colored-bordered/facebook-logo-colored-bordered.png" alt="Fb" title="Facebook" height="32" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                  <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#6A994E;font-size:12px"><img src="https://ehnunlc.stripocdn.email/content/assets/img/social-icons/logo-colored-bordered/instagram-logo-colored-bordered.png" alt="Ig" title="Instagram" height="32" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr>
                              <td align="center" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:20px;color:#4D4D4D;font-size:13px"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#990000;font-size:12px" href=""></a><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#990000;font-size:12px" href="https://viewstripo.email">Privacy Policy</a><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#990000;font-size:13px" href=""></a> • <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#990000;font-size:12px" href="">Unsubscribe</a></p></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`
  };

  try {
    await sendGridMail.send(msg);
    res.json({
      message: "Email sent Successfully!!"
    });
  } catch (error) {
    res.json({
      message: "Error",
      error: error
    });
  }
});


app.post('/contactNormal', async (req, res) => {
  let { name, mail, message } = req.body;

  const tableStyles = `
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
        font-family: Arial, sans-serif;
        margin-bottom: 20px;
        border: 1px solid #ddd;
      }
      th, td {
        padding: 15px;
        text-align: left;
        border: 1px solid #ddd;
        font-size: 15px;
      }
      th {
        background-color: #1a5276; /* Dark bluish matter color */
        color: #fff; /* White text color */
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      tr:hover {
        background-color: #e9e9e9;
      }
    </style>
  `;

  const tableData = `
    <table>
      <tr>
        <th style="background-color: #1a5276; color: #fff; padding: 15px; font-size: 15px;">Name</th>
        <td style="padding: 15px; border: 1px solid #ddd; font-size: 15px;">${name}</td>
      </tr>
      <tr>
        <th style="background-color: #1a5276; color: #fff; padding: 15px; font-size: 15px;">Email</th>
        <td style="padding: 15px; border: 1px solid #ddd; font-size: 15px;">${mail}</td>
      </tr>
      <tr>
        <th style="background-color: #1a5276; color: #fff; padding: 15px; font-size: 15px;">Message</th>
        <td style="padding: 15px; border: 1px solid #ddd; font-size: 15px;">${message}</td>
      </tr>
    </table>
  `;

  const msg = {
    to: ['info@bcimmigrationconsultants.com', 'contact@bcimmigrationconsultants.com', 'rspmanas1@gmail.com'],
    from: { name: 'BC Immigration Consultants', email: 'info@bcimmigrationconsultants.com' },
    subject: `New Enquiry: ${req.body.name}`,
    html: `${tableStyles}${tableData}`
  };

  try {
    await sendGridMail.send(msg);
    res.json({ message: "Email sent Successfully!!" });
  } catch (error) {
    res.json({ message: "Error", error: error });
  }
});

app.post('/contactForm', async (req, res) => {
  let { name, mail, phone, category, message } = req.body;

  const tableStyles = `
    <style>
      table {
        border-collapse: collapse;
        width: 100%;
        font-family: Arial, sans-serif;
        margin-bottom: 20px;
        border: 1px solid #ddd;
      }
      th, td {
        padding: 15px;
        text-align: left;
        border: 1px solid #ddd;
        font-size: 15px;
      }
      th {
        background-color: #1a5276;
        color: #fff;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      tr:hover {
        background-color: #e9e9e9;
      }
    </style>
  `;

  const tableData = `
    <table>
      <tr>
        <th style="background-color: #1a5276; color: #fff; padding: 15px; font-size: 15px;">Name</th>
        <td style="padding: 15px; border: 1px solid #ddd; font-size: 15px;">${name}</td>
      </tr>
      <tr>
        <th style="background-color: #1a5276; color: #fff; padding: 15px; font-size: 15px;">Email</th>
        <td style="padding: 15px; border: 1px solid #ddd; font-size: 15px;">${mail}</td>
      </tr>
      <tr>
        <th style="background-color: #1a5276; color: #fff; padding: 15px; font-size: 15px;">Phone</th>
        <td style="padding: 15px; border: 1px solid #ddd; font-size: 15px;">${phone}</td>
      </tr>
      <tr>
        <th style="background-color: #1a5276; color: #fff; padding: 15px; font-size: 15px;">Service</th>
        <td style="padding: 15px; border: 1px solid #ddd; font-size: 15px;">${category}</td>
      </tr>
      <tr>
        <th style="background-color: #1a5276; color: #fff; padding: 15px; font-size: 15px;">Message</th>
        <td style="padding: 15px; border: 1px solid #ddd; font-size: 15px;">${message}</td>
      </tr>
    </table>
  `;

  const msg = {
    to: ['info@bcimmigrationconsultants.com', 'contact@bcimmigrationconsultants.com', 'rspmanas1@gmail.com'],
    from: { name: 'BC Immigration Consultants', email: 'info@bcimmigrationconsultants.com' },
    subject: `New Enquiry: ${req.body.name}`,
    html: `${tableStyles}${tableData}`
  };

  try {
    await sendGridMail.send(msg);
    res.json({ message: "Email sent Successfully!!" });
  } catch (error) {
    res.json({ message: "Error", error: error });
  }
});