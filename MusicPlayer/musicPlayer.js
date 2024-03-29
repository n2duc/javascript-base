/*
9. Scroll active song into view
10. Play song when click
*/

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'N2D'

const player = $('.player')
const cd = $('.cd')
const heading = $('.curr-music-play')
const singerCurr = $('.singer-name')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const progress = $('#progress')
const playList = $('.playlist')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'Cheri Cheri Lady',
            singer: 'Malena',
            path: './music/cherylady.mp3',
            image: './images/cherylady.jpg'
        },
        {
            name: 'Dancin',
            singer: 'Aarom Smith',
            path: './music/dancin.mp3',
            image: './images/dancin.jpg'
        },
        {
            name: 'I Do',
            singer: '911 Band',
            path: './music/ido911.mp3',
            image: './images/ido911.jpg'
        },
        {
            name: 'Love Story',
            singer: 'Taylor Swift',
            path: './music/lovestory.mp3',
            image: './images/lovestory.jpg'
        },
        {
            name: 'Love Yourself',
            singer: 'Justin Bieber',
            path: './music/loveyourself.mp3',
            image: './images/loveyourself.webp'
        },
        {
            name: 'My Love',
            singer: 'Westlife',
            path: './music/mylove.mp3',
            image: './images/mylove.webp'
        },
        {
            name: 'Why Not Me',
            singer: 'Enrique Iglesias',
            path: './music/whynotme.mp3',
            image: './images/whynotme.jpg'
        },
        {
            name: 'Perfect Two',
            singer: 'Auburn',
            path: './music/perfect2.mp3',
            image: './images/perfect2.jpg'
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    //1. Render songs
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url(${song.image});"></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playList.innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _ = this
        const cdWidth = cd.offsetWidth

        //4. CD rotate
        const cdAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdAnimate.pause()

        //2. Scroll top
        document.onscroll = function() {
            const scrollTop = window.scrollY
            const newCDWidth = cdWidth - scrollTop
            cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0
            cd.style.opacity = newCDWidth/cdWidth
        }

        //3. Play / Pause / Seek
        playBtn.onclick = () => {
            if (_.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        audio.onplay = () => {
            _.isPlaying = true
            player.classList.add('playing')
            cdAnimate.play()
        }
        audio.onpause = () => {
            _.isPlaying = false
            player.classList.remove('playing')
            cdAnimate.pause()
        }
        audio.ontimeupdate = () => {
            //currentTime
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }
        progress.onchange = (e) => {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }
        //5. Next / prev
        nextBtn.onclick = () => {
            if (_.isRandom) {
                _.playRandomSong()
            } else {
                _.next()
            }
            audio.play()
            _.render()
            _.scrollToActiveSong()
        }
        prevBtn.onclick = () => {
            if (_.isRandom) {
                _.playRandomSong()
            } else {
                _.prev()
            }
            audio.play()
            _.render()
            _.scrollToActiveSong()
        }
        //6. Random
        randomBtn.onclick = () => {
            _.isRandom = !_.isRandom
            _.setConfig('isRandom', _.isRandom)
            randomBtn.classList.toggle('active', _.isRandom)
        }
        //7. Next / Repeat when ended
        repeatBtn.onclick = () => {
            _.isRepeat = !_.isRepeat
            _.setConfig('isRepeat', _.isRepeat)
            repeatBtn.classList.toggle('active', _.isRepeat)
        }
        audio.onended = () => {
            if (_.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        playList.onclick = (e) => {
            const songTarget = e.target.closest('.song:not(.active)')
            const optionTarget = e.target.closest('.option')
            if (songTarget || optionTarget) {
                if (songTarget) {
                    _.currentIndex = Number(songTarget.dataset.index)
                    _.loadCurrentSong()
                    _.render()
                    audio.play()
                }
                if (optionTarget) {

                }
            }
        }
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 300)
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        singerCurr.textContent = this.currentSong.singer
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    next: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prev: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start: function() {
        this.loadConfig()
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)
    }
}
app.start()
