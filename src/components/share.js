  import React from "react";
  import styled from "styled-components";

  // import useSiteMetadata from '../hooks/use-site-metadata';
  import { colors } from "../utils/vars";
  import { site } from "../utils/site";

  const Share = styled.section`
    margin: 1.5rem 2rem 0 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .share {
      display: inline-block;
    }
    .share a {
      display: block;
      width: 2.66rem;
      height: 2.66rem;
      margin: 0 0.5em 0.5em 0;
      text-align: center;
      color: ${colors.light};
      background: ${colors.second50};
      border: 0.05rem solid ${colors.light};
      border-radius: 1.33rem;
    }
    .share a:hover {
      color: ${colors.textSecond};
    }
    .share svg {
      margin-top: 0.4rem;
      width: 1.77rem;
      height: 1.77rem;
    }
    .facebook a:hover {background: #3b5998;}
    .twitter a:hover {background: #00aced;}
    .vkontakte a:hover {background: #45668e;}
    .telegram a:hover {background: #249bd7;}
    .messenger a:hover {background: #009bff;}
    .viber a:hover {background: #7b519d;}
  `;

/*
 * Styles
 *
    .instagram a:hover {background: #517fa4;}
    .linkedin a:hover {background: #0e76a8;}
    .pinterest a:hover {background: #c8232c;}
    .whatsapp a:hover {background: #50b154;}
    .discord a:hover {background: #7289da;}
    .skype a:hover {background: #00aff0;}
    .dropbox a:hover {background: #1087dd;}
    .github a:hover {background: #191919;}
    .odnoklassniki a:hover {background: #f93;}
    .tumblr a:hover {background: #34526f;}
    .vimeo a:hover {background: #5bc7ff;}
    .youtube a:hover {background: #c4302b;}
    .windows a:hover {background: #125acd;}
 */


  const url = encodeURIComponent('https://' + site.siteURL + '/' + site.artSlug);
  const title = encodeURIComponent(site.artTitle);
  // const image = encodeURIComponent(site.artBanner);

  // console.log('URL:', `https://t.me/share/url?url=${url}`);
  // console.log('Title:', title);


  export default () => (
    <>
      <Share>
        <div>
          <div className="share facebook">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} title="Facebook" target="_blank" rel="noreferrer">
              <svg><use xlinkHref="#icon-facebook" /></svg>
            </a>
          </div>
          <div className="share twitter">
            <a href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`} title="Twitter" target="_blank" rel="noreferrer">
              <svg><use xlinkHref="#icon-twitter" /></svg>
            </a>
          </div>
          <div className="share vkontakte">
            <a href={`https://vk.com/share.php?url=${url}`} title="VK" target="_blank" rel="noreferrer">
              <svg><use xlinkHref="#icon-vkontakte" /></svg>
            </a>
          </div>
        </div>
        <div>
          <div className="share telegram">
            <a href={`tg://msg?url=${url}&text=${title}`} title="Telegram" target="_blank" rel="noreferrer">
              <svg><use xlinkHref="#icon-telegram" /></svg>
            </a>
          </div>
          <div className="share messenger">
            <a href={`fb-messenger://share/?link=${url}`} title="Messenger" target="_blank" rel="noreferrer">
              <svg><use xlinkHref="#icon-messenger" /></svg>
            </a>
          </div>
          <div className="share viber">
            <a href={`viber://forward?text=${url}`} title="Viber" target="_blank" rel="noreferrer">
              <svg><use xlinkHref="#icon-viber" /></svg>
            </a>
          </div>
        </div>
      </Share>
    </>
  );

/*
 * Buttons
 *
          <div className="share telegram">
            <a href={`https://t.me/share/url?url=${url}&text=${title}`} title="Telegram" target="_blank" rel="noreferrer">
              <svg><use xlinkHref="#icon-telegram" /></svg>
            </a>
          </div>

          <div className="share instagram">
            <a href="#" title="Instagram" target="_blank" rel="noreferrer">
              <svg><use xlinkHref="#icon-instagram" /></svg>
            </a>
          </div>
          <div className="share linkedin">
            <a href={`www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=&source=`} target="_blank" title="LinkedIn">
              <svg><use xlinkHref="#icon-linkedin" /></svg>
            </a>
          </div>
          <div className="share pinterest">
            <a href={`http://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`} target="_blank" title="Pinterest">
              <svg><use xlinkHref="#icon-pinterest" /></svg>
            </a>
          </div>
          <div className="share whatsapp">
            <a href={`https://api.whatsapp.com/send?text=${url}`} target="_blank" title="Whatsapp">
              <svg><use xlinkHref="#icon-whatsapp" /></svg>
            </a>
          </div>
          <div className="share discord">
            <a href="#" target="_blank" title="Discord">
              <svg><use xlinkHref="#icon-discord" /></svg>
            </a>
          </div>
          <div className="share skype">
            <a href="#" target="_blank" title="Skype">
              <svg><use xlinkHref="#icon-skype" /></svg>
            </a>
          </div>
          <div className="share dropbox">
            <a href="#" target="_blank" title="Dropbox">
              <svg><use xlinkHref="#icon-dropbox" /></svg>
            </a>
          </div>
          <div className="share github">
            <a href="#" target="_blank" title="Github">
              <svg><use xlinkHref="#icon-github" /></svg>
            </a>
          </div>
          <div className="share odnoklassniki">
            <a href={`https://connect.ok.ru/offer?url=${url}&title=${title}`} target="_blank" title="Odnoklassniki">
              <svg><use xlinkHref="#icon-odnoklassniki" /></svg>
            </a>
          </div>
          <div className="share tumblr">
            <a href={`http://www.tumblr.com/share?v=3&u=${url}&t=${title}`} target="_blank" title="Tumblr">
              <svg><use xlinkHref="#icon-tumblr" /></svg>
            </a>
          </div>
          <div className="share vimeo">
            <a href="#" target="_blank" title="Vimeo">
              <svg><use xlinkHref="#icon-vimeo" /></svg>
            </a>
          </div>
          <div className="share youtube">
            <a href="#" target="_blank" title="Youtube">
              <svg><use xlinkHref="#icon-youtube" /></svg>
            </a>
          </div>
          <div className="share windows">
            <a href="#" target="_blank" title="Windows">
              <svg><use xlinkHref="#icon-windows" /></svg>
            </a>
          </div>
 */








/*

[
      href: `https://www.instagram.com/`=${urlInstagram}
      https://twitter.com/share?url=[URL]&text=[TITLE]
      http://www.reddit.com/submit?url=[URL]
      http://connect.mail.ru/share?url=[URL]&title=[TITLE]&description=[DESC]&imageurl=[IMAGE]
      <a href="https://m.me/[ACCOUNT]">Message us on Facebook</a>;

*/
