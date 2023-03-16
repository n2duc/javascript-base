/*
1. Render songs
2. Scroll top
3. Play / Pause / Seek
4. CD rotate
5. Next / prev
6. Random
7. Next / Repeat when ended
8. Active song
9. Scroll active song into view
10. Play song when click
*/

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const player = $('.player')
const cd = $('.cd')
const heading = $('.curr-music-play')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const progress = $('#progress')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
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
            image: './images/mylove.jpg'
        },
        {
            name: 'Why Not Me',
            singer: 'Enrique Iglesias',
            path: './music/whynotme.mp3',
            image: './images/whynotme.jpg'
        }
    ],
    render: function() {
        const htmls = this.songs.map(song => {
            return `
                <div class="song">
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
        $('.playlist').innerHTML = htmls.join('')
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

        const cdAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdAnimate.pause()

        document.onscroll = function() {
            const scrollTop = window.scrollY
            const newCDWidth = cdWidth - scrollTop
            cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0
            cd.style.opacity = newCDWidth/cdWidth
        }

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
        nextBtn.onclick = () => {
            if (_.isRandom) {
                _.playRandomSong()
            } else {
                _.next()
            }
            audio.play()
        }
        prevBtn.onclick = () => {
            if (_.isRandom) {
                _.playRandomSong()
            } else {
                _.prev()
            }
            audio.play()
        }
        randomBtn.onclick = () => {
            _.isRandom = !_.isRandom
            randomBtn.classList.toggle('active', _.isRandom)
        }
        audio.onended = () => {
            nextBtn.click()
        }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
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
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
        this.render();
    }
}
app.start()
