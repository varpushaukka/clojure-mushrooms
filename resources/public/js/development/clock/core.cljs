(ns clock.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb))

(defn draw-state [state]
  (q/background 51)

  (let
   [max-scale-h (- 1 (/ 1 12))     ;; get percentage of current hour, range value from 0-1
    max-scale-m (- 1 (/ 1 60))     ;; get percentage of current minute, range value from 0-1
    max-scale-s (- 1 (/ 1 60))     ;; get percentage of current seconds, range value from 0-1
     ;; above values are half of the actual values, so we need to multiply it with 2π

     ;; mappings
    h (q/map-range
       (if (> (q/hour) 12) (- (q/hour) 12) (q/hour))  ;; if hour more than 12, subtract with 12
       0 11
       0 max-scale-h)
    m (q/map-range
       (q/minute)
       0 59
       0 max-scale-m)
    s (q/map-range
       (q/seconds)
       0 59
       0 max-scale-s)

     ;; multiply values above with 2π
    h-a (* q/TWO-PI h)
    m-a (* q/TWO-PI m)
    s-a (* q/TWO-PI s)]

    ;; setting the stroke thickness
    (q/stroke-weight 8)
    ;; setting the arc with not fill inside
    (q/no-fill)

    ;; setting the stroke color
    (let [halfw (/ (q/width) 2)
          halfh (/ (q/height) 2)]
      (q/with-translation [halfw halfh]

        (q/with-rotation [(* -1 q/HALF-PI)]
          ;; drawing the arcs
          ; drawing hours
          (q/stroke 255 100 150)
          (q/with-rotation [h-a]
            (q/line 0 0 60 0))
          (q/arc 0 0 400 400 0 h-a)

          ; drawing minutes
          (q/stroke 150 100 255)
          (q/with-rotation [m-a]
            (q/line 0 0 100 0))
          (q/arc 0 0 360 360 0 m-a)

          ; drawing hours
          (q/stroke 150 255 100)
          (q/with-rotation [s-a]
            (q/line 0 0 160 0))
          (q/arc 0 0 320 320 0 s-a))))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch clock
    :host "clock"
    :size [500 500]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
