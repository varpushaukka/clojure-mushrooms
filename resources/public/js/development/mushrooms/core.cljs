(ns mushrooms.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def field-size 700)

(defn pulse [low high rate]
  (let [diff (- high low)
        half (/ diff 2)
        mid (+ low half)
        s (/ (q/millis) 1000.0)
        x (q/sin (* s (/ 1.0 rate)))]
    (+ mid (* x half))))

(defn load-image [image]
  (let [path (str "/" (name image) ".svg")]
    (q/load-image path)))

(defn draw-image [state k [x y]]
  (q/image (get state [:images k]) x y))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (q/image-mode :center)
  {:head (load-image "skull-head")
   :jaw (load-image "jaw")})

(defn update-state [state]
  state)

(defn draw-state [state]
  (q/clear)
  (q/rotate (pulse -0.02 0.02 0.5))
  (q/translate (pulse 1 50 0.25) 0)
  (q/image (get state :head) (/ (q/width) 2) (/ (q/height) 2))
  (q/translate 0 (pulse 1 100 0.25))
  (q/image (get state :jaw) (/ (q/width) 2) (/ (q/height) 2))
  )
  ; (q/with-translation [100 0 0]
  ;   (q/with-rotation [(q/frame-count)]
  ;     (q/image (get state :image) (/ (q/width) 2) (/ (q/height) 2)))
  ;   ))

(q/defsketch mushrooms
  :host "mushrooms"
  :size [1000 1000]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])